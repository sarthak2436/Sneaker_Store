import { ArrowRight, Sparkles } from 'lucide-react'
import { useStore } from '../StoreContext'
import ProductCard from '../components/ProductCard'

const sortOptions = ['Date', 'Price']
const showOptions = ['Lifestyle', 'Running', 'Basketball']

function Storefront() {
  const { inventory } = useStore()
  const featuredSneaker = inventory[0]

  return (
    <main className="space-y-4 pb-8 sm:space-y-5">
      <section className="panel overflow-hidden">
        <div className="grid gap-4 p-3.5 sm:gap-5 sm:p-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 lg:p-6">
          <div className="flex flex-col justify-center">
            <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] text-purple-200">
              <Sparkles size={12} />
              Featured Drop
            </div>
            <h2 className="max-w-xl text-xl font-semibold leading-tight text-white min-[380px]:text-2xl sm:text-3xl lg:text-4xl">
              Night-run energy for players who shop like collectors.
            </h2>
            <p className="mt-3.5 max-w-xl text-sm leading-6 text-gray-400 sm:mt-4 sm:text-[15px]">
              Curated silhouettes, performance-ready cushioning, and a storefront tuned for late-night
              browsing with premium dark-mode attitude.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:mt-6 sm:gap-3">
              <button
                type="button"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-500"
              >
                Start shopping
                <ArrowRight size={15} />
              </button>
              <div className="rounded-full border border-white/10 px-3.5 py-2.5 text-xs text-gray-300 sm:text-sm">
                120+ exclusive styles live tonight
              </div>
            </div>
          </div>

          <div className="relative flex min-h-[200px] items-center justify-center rounded-[24px] border border-white/5 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.22),_transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] p-4 sm:min-h-[250px] sm:p-6 lg:rounded-[28px]">
            <div className="absolute inset-x-8 bottom-8 h-8 rounded-full bg-purple-500/25 blur-3xl" />
            <img
              src={featuredSneaker.image}
              alt={featuredSneaker.name}
              className="relative z-10 h-36 w-full max-w-sm object-contain drop-shadow-[0_20px_45px_rgba(168,85,247,0.45)] min-[380px]:h-40 sm:h-48 lg:h-56"
            />
            <div className="absolute left-4 top-4 rounded-xl border border-white/5 bg-[#18181c]/80 px-3 py-2 backdrop-blur">
              <p className="text-[10px] uppercase tracking-[0.22em] text-gray-500">Launch pick</p>
              <p className="mt-1 text-xs font-semibold text-white sm:text-sm">{featuredSneaker.name}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="panel p-4 sm:p-5">
        <div className="flex flex-col gap-3 text-xs text-gray-400 sm:text-sm lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <span className="text-gray-500">Sort by:</span>
            {sortOptions.map((item, index) => (
              <button
                key={item}
                type="button"
                className={index === 0 ? 'text-white' : 'transition hover:text-white'}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <span className="text-gray-500">Show:</span>
            {showOptions.map((item, index) => (
              <button
                key={item}
                type="button"
                className={index === 0 ? 'text-purple-300' : 'transition hover:text-white'}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="flex items-center justify-between px-1">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-gray-500">Catalogue</p>
          <h3 className="mt-1 text-base font-semibold text-white min-[380px]:text-lg sm:text-xl">
            {inventory.length} sneakers ready to shop
          </h3>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {inventory.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}

export default Storefront
