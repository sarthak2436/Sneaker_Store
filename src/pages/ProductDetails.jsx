import { CheckCircle2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useStore } from '../StoreContext'

function ProductDetails() {
  const { id } = useParams()
  const { inventory } = useStore()
  const product = useMemo(
    () => inventory.find((item) => String(item.id) === id),
    [id, inventory],
  )
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] ?? null)
  const [showToast, setShowToast] = useState(false)

  if (!product) {
    return (
      <section className="panel p-8">
        <p className="text-lg text-white">Product not found.</p>
        <Link to="/" className="mt-4 inline-flex text-sm text-purple-300">
          Return to catalogue
        </Link>
      </section>
    )
  }

  const handleAddToCart = () => {
    setShowToast(true)
    window.setTimeout(() => setShowToast(false), 2200)
  }

  return (
    <main className="space-y-5 pb-8">
      {showToast && (
        <div className="fixed left-1/2 top-4 z-50 flex w-[calc(100%-1.5rem)] max-w-sm -translate-x-1/2 items-center gap-3 rounded-2xl border border-purple-500/20 bg-[#22222a] px-4 py-3 text-sm text-white shadow-[0_12px_40px_rgba(0,0,0,0.45)] sm:left-auto sm:right-5 sm:top-5 sm:w-auto sm:translate-x-0">
          <CheckCircle2 size={18} className="text-purple-400" />
          Added {product.name} to your cart.
        </div>
      )}

      <section className="panel overflow-hidden">
        <div className="grid gap-4 p-3.5 sm:gap-5 sm:p-5 lg:grid-cols-[1fr_0.92fr] lg:gap-6 lg:p-6">
          <div className="relative flex min-h-[220px] items-center justify-center rounded-[24px] border border-white/5 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.18),_transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] p-4 sm:min-h-[320px] sm:p-5 lg:rounded-[28px] lg:p-6">
            <div className="absolute inset-x-10 bottom-8 h-8 rounded-full bg-purple-500/30 blur-3xl" />
            <img
              src={product.image}
              alt={product.name}
              className="relative z-10 h-40 w-full object-contain drop-shadow-[0_24px_56px_rgba(168,85,247,0.45)] min-[380px]:h-48 sm:h-64 lg:h-72"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-[0.28em] text-purple-400 sm:text-xs">
              {product.categoryTags.join(' / ')}
            </p>
            <h2 className="mt-2.5 text-xl font-semibold text-white min-[380px]:text-2xl sm:text-3xl lg:text-4xl">{product.name}</h2>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="text-xl font-semibold text-white min-[380px]:text-2xl sm:text-3xl">${product.currentPrice}</span>
              <span className="text-base text-gray-500 line-through sm:text-lg">${product.originalPrice}</span>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">{product.description}</p>

            <div className="mt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 sm:text-sm">
                Select Size
              </p>
              <div className="grid grid-cols-2 gap-2.5 min-[420px]:grid-cols-3 sm:grid-cols-4">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition ${
                      selectedSize === size
                        ? 'border-purple-500 bg-purple-600 text-white'
                        : 'border-white/10 bg-[#18181c] text-gray-300 hover:border-purple-500/40 hover:text-white'
                    }`}
                  >
                    US {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-500 sm:w-fit"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductDetails
