import { Menu, Search, ShoppingBag } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Catalogue', to: '/' },
  { label: 'About', to: '/' },
]

function TopNavbar({ onMenuClick }) {
  return (
    <header className="panel overflow-hidden">
      <div className="flex flex-col gap-3 p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 items-center gap-3 text-white">
          <button
            type="button"
            onClick={onMenuClick}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] lg:hidden"
          >
            <Menu size={16} />
          </button>
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.26em] text-purple-400 sm:text-[11px]">
              Sneaker Store
            </p>
            <h1 className="truncate text-sm font-semibold sm:text-lg">Premium Night Catalogue</h1>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-3 lg:max-w-3xl lg:flex-row lg:items-center lg:justify-end">
          <div className="relative flex-1 lg:max-w-lg">
            <Search
              size={16}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              placeholder="Search for silhouettes, brands, or drops"
              className="w-full rounded-xl border border-white/5 bg-[#191921] py-2.5 pl-10 pr-4 text-sm text-white outline-none ring-0 transition placeholder:text-gray-500 focus:border-purple-500/50"
            />
          </div>

          <nav className="hidden flex-wrap items-center gap-4 text-sm text-gray-400 sm:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  isActive ? 'text-white' : 'transition hover:text-white'
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-[#191921] text-white"
          >
            <ShoppingBag size={16} />
            <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-purple-600 px-1 text-[9px] font-semibold text-white">
              3
            </span>
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full border px-3 py-1.5 text-[11px] font-medium transition ${
                  isActive
                    ? 'border-purple-500/30 bg-purple-600/15 text-purple-200'
                    : 'border-white/10 bg-[#191921] text-gray-300 hover:border-purple-500/30 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 lg:hidden">
          <Link
            to="/seller"
            className="rounded-full border border-purple-500/30 bg-purple-600/15 px-3 py-1.5 text-xs font-medium text-purple-200 transition hover:bg-purple-600/25"
          >
            Seller Dashboard
          </Link>
          <Link
            to="/seller/add"
            className="rounded-full border border-white/10 bg-[#191921] px-3 py-1.5 text-xs font-medium text-gray-300 transition hover:border-purple-500/30 hover:text-white"
          >
            Add Product
          </Link>
        </div>
      </div>
    </header>
  )
}

export default TopNavbar
