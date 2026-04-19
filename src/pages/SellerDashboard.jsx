import { Link } from 'react-router-dom'
import { useStore } from '../StoreContext'

function SellerDashboard() {
  const { inventory } = useStore()

  return (
    <main className="space-y-5 pb-8">
      <section className="panel p-4 sm:p-5 lg:p-6">
        <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-purple-400">Seller View</p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Inventory Dashboard</h2>
          </div>
          <Link
            to="/seller/add"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-500 sm:w-fit"
          >
            Add Product
          </Link>
        </div>

        <div className="hidden overflow-hidden rounded-[22px] border border-white/5 sm:block">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/5 text-left">
              <thead className="bg-[#191921]">
                <tr className="text-[11px] uppercase tracking-[0.2em] text-gray-500">
                  <th className="px-3 py-3.5 sm:px-5 sm:py-4">Product</th>
                  <th className="px-3 py-3.5 sm:px-5 sm:py-4">Price</th>
                  <th className="px-3 py-3.5 sm:px-5 sm:py-4">Categories</th>
                  <th className="px-3 py-3.5 sm:px-5 sm:py-4">Sizes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-[#22222a]">
                {inventory.map((item) => (
                  <tr key={item.id} className="text-xs text-gray-300 sm:text-sm">
                    <td className="px-3 py-3.5 sm:px-5 sm:py-4">
                      <div className="flex items-center gap-3">
                        <img src={item.image} alt={item.name} className="h-10 w-10 object-contain sm:h-12 sm:w-12" />
                        <div>
                          <p className="font-medium text-white">{item.name}</p>
                          <p className="hidden text-xs text-gray-500 sm:block">{item.description.slice(0, 48)}...</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-3.5 text-white sm:px-5 sm:py-4">${item.currentPrice}</td>
                    <td className="px-3 py-3.5 sm:px-5 sm:py-4">{item.categoryTags.join(', ')}</td>
                    <td className="px-3 py-3.5 sm:px-5 sm:py-4">{item.sizes.join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3 sm:hidden">
          {inventory.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-white/5 bg-[#191921] p-3.5"
            >
              <div className="flex items-center gap-3">
                <img src={item.image} alt={item.name} className="h-14 w-14 object-contain" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-white">{item.name}</p>
                  <p className="mt-1 text-xs text-purple-300">${item.currentPrice}</p>
                </div>
              </div>

              <p className="mt-3 text-xs leading-5 text-gray-400">{item.description}</p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.categoryTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-[11px] text-purple-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-3 text-[11px] text-gray-500">Sizes: {item.sizes.join(', ')}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default SellerDashboard
