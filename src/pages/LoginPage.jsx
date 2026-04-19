import { LockKeyhole, Mail } from 'lucide-react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useStore } from '../StoreContext'

function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useStore()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    login(formData)
    navigate(location.state?.from?.pathname || '/', { replace: true })
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#18181c] px-3 py-6 sm:px-4 sm:py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.06),_transparent_22%)]" />
      <section className="panel relative z-10 w-full max-w-md p-5 sm:p-6">
        <p className="text-[11px] uppercase tracking-[0.34em] text-purple-400">Welcome Back</p>
        <h1 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Login to Sneaker Store</h1>
        <p className="mt-3 text-sm leading-6 text-gray-400">
          Use any dummy email and password to enter the premium storefront mockup.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <label className="block space-y-2">
            <span className="text-sm text-gray-300">Email</span>
            <div className="relative">
              <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                required
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#18181c] py-2.5 pl-10 pr-4 text-sm text-white outline-none transition focus:border-purple-500/50"
                placeholder="nightbuyer@sneaker.store"
              />
            </div>
          </label>

          <label className="block space-y-2">
            <span className="text-sm text-gray-300">Password</span>
            <div className="relative">
              <LockKeyhole
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                required
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#18181c] py-2.5 pl-10 pr-4 text-sm text-white outline-none transition focus:border-purple-500/50"
                placeholder="Enter any password"
              />
            </div>
          </label>

          <button
            type="submit"
            className="min-h-11 w-full rounded-xl bg-purple-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-500"
          >
            Enter Store
          </button>
        </form>
      </section>
    </main>
  )
}

export default LoginPage
