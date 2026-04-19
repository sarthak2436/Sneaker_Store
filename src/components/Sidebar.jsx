import { useEffect } from 'react'
import { Check, LayoutDashboard, LogOut, PlusCircle, SlidersHorizontal, Wallet, X } from 'lucide-react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useStore } from '../StoreContext'

const brands = ['Nike', 'Adidas', 'Jordan', 'Puma', 'Asics']
const statuses = ['In Stock', 'New Arrival', 'Best Seller']

function Sidebar({ isOpen, onClose }) {
  const { user, logout } = useStore()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    onClose?.()
  }, [location.pathname, onClose])

  const handleLogout = () => {
    logout()
    onClose?.()
    navigate('/login')
  }

  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/55 backdrop-blur-sm transition lg:hidden ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <aside
        className={`panel fixed inset-y-3 left-3 z-50 flex w-[min(84vw,320px)] flex-col overflow-y-auto overflow-x-hidden transition duration-300 lg:sticky lg:top-5 lg:z-auto lg:h-fit lg:w-[280px] lg:translate-x-0 lg:max-h-[calc(100vh-2.5rem)] ${
          isOpen ? 'translate-x-0' : '-translate-x-[110%]'
        }`}
      >
        <div className="flex min-h-full flex-col gap-6 p-4 sm:p-5">
          <div className="flex items-center justify-between lg:hidden">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">Filters</p>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/10 p-2 text-gray-300"
            >
              <X size={16} />
            </button>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-3.5">
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-600/20 text-sm font-semibold text-purple-300">
                {user?.name?.slice(0, 1)?.toUpperCase() || 'G'}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-white">{user?.name || 'Guest'}</p>
                <p className="truncate text-[11px] text-gray-400">{user?.email || 'guest@store.dev'}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className="shrink-0 rounded-full border border-white/10 p-2 text-gray-300 transition hover:border-purple-500/50 hover:text-white"
            >
              <LogOut size={16} />
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
              <Wallet size={16} className="text-purple-400" />
              Budget
            </div>
            <div className="rounded-2xl border border-white/5 bg-[#191921] p-3.5">
              <div className="mb-2.5 flex items-center justify-between text-xs text-gray-300">
                <span>$80</span>
                <span className="text-purple-400">$420</span>
              </div>
              <input type="range" min="80" max="420" defaultValue="265" className="range-thumb" />
              <p className="mt-2.5 text-[11px] leading-5 text-gray-500">
                Fine-tune your drop zone for elite pairs.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
              <SlidersHorizontal size={16} className="text-purple-400" />
              Brand
            </div>
            <div className="flex flex-wrap gap-2">
              {brands.map((brand) => (
                <button
                  key={brand}
                  type="button"
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-300 transition hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white"
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">Status</div>
            <div className="space-y-2.5">
              {statuses.map((status, index) => (
                <label
                  key={status}
                  className="flex cursor-pointer items-center justify-between rounded-xl border border-white/5 bg-[#191921] px-3.5 py-2.5 text-sm text-gray-300"
                >
                  <span>{status}</span>
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-md border ${
                      index === 0
                        ? 'border-purple-500 bg-purple-600 text-white'
                        : 'border-white/10 bg-transparent text-transparent'
                    }`}
                  >
                    <Check size={14} />
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-auto space-y-2.5">
            <NavLink
              to="/seller"
              className={({ isActive }) =>
                `flex items-center justify-between rounded-xl border px-3.5 py-3 text-sm transition ${
                  isActive || location.pathname.startsWith('/seller')
                    ? 'border-purple-500/40 bg-purple-600/15 text-white'
                    : 'border-white/5 bg-[#191921] text-gray-300 hover:border-purple-500/40 hover:text-white'
                }`
              }
            >
              <span className="flex items-center gap-3">
                <LayoutDashboard size={16} className="text-purple-400" />
                Seller Dashboard
              </span>
              <span className="text-[11px] text-gray-500">Manage</span>
            </NavLink>

            <Link
              to="/seller/add"
              className="flex items-center justify-between rounded-xl border border-white/5 bg-[#191921] px-3.5 py-3 text-sm text-gray-300 transition hover:border-purple-500/40 hover:text-white"
            >
              <span className="flex items-center gap-3">
                <PlusCircle size={16} className="text-purple-400" />
                Add Product
              </span>
              <span className="text-[11px] text-gray-500">New</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
