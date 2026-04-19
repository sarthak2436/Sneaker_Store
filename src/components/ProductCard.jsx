import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group panel flex h-full flex-col overflow-hidden p-3.5 transition duration-300 hover:-translate-y-1 hover:border-purple-500/20 sm:p-4"
    >
      <div className="relative mb-4 flex min-h-[170px] items-center justify-center rounded-[20px] bg-gradient-to-br from-white/[0.05] to-transparent p-4 sm:min-h-[190px]">
        <div className="absolute inset-x-10 bottom-5 h-7 rounded-full bg-purple-500/25 blur-2xl transition duration-300 group-hover:bg-purple-500/40" />
        <img
          src={product.image}
          alt={product.name}
          className="relative z-10 h-32 w-full object-contain drop-shadow-[0_12px_28px_rgba(168,85,247,0.45)] transition duration-300 group-hover:scale-105 sm:h-36"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="mb-2.5 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-white sm:text-lg">{product.name}</h3>
            <p className="mt-1 text-xs text-gray-400 sm:text-sm">{product.categoryTags.join(' / ')}</p>
          </div>
          <ArrowUpRight size={16} className="mt-0.5 text-purple-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        <div className="mb-2.5 flex items-center gap-2.5">
          <span className="text-lg font-semibold text-white sm:text-xl">${product.currentPrice}</span>
          <span className="text-xs text-purple-400 line-through sm:text-sm">${product.originalPrice}</span>
        </div>

        <p className="mb-3 text-xs leading-5 text-gray-400 sm:text-sm sm:leading-6">{product.description}</p>

        <div className="mt-auto flex flex-wrap gap-1.5">
          {product.categoryTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-[11px] font-medium text-purple-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
