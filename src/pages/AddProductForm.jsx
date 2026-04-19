import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../StoreContext'

function AddProductForm() {
  const navigate = useNavigate()
  const { addProduct } = useStore()
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addProduct(formData)
    navigate('/')
  }

  return (
    <main className="space-y-5 pb-8">
      <section className="panel mx-auto w-full max-w-3xl p-4 sm:p-5 lg:p-6">
        <div className="mb-6">
          <p className="text-[11px] uppercase tracking-[0.3em] text-purple-400">Seller Tools</p>
          <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Add a New Sneaker</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm text-gray-300">Name</span>
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#18181c] px-3.5 py-2.5 text-sm text-white outline-none transition focus:border-purple-500/50"
                placeholder="Nebula Sprint X"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm text-gray-300">Price</span>
              <input
                required
                name="price"
                type="number"
                min="1"
                value={formData.price}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#18181c] px-3.5 py-2.5 text-sm text-white outline-none transition focus:border-purple-500/50"
                placeholder="199"
              />
            </label>
          </div>

          <label className="space-y-2">
            <span className="text-sm text-gray-300">Description</span>
            <textarea
              required
              name="description"
              rows="5"
              value={formData.description}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-[#18181c] px-3.5 py-2.5 text-sm text-white outline-none transition focus:border-purple-500/50"
              placeholder="Describe the sneaker, feel, and standout details."
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm text-gray-300">Image URL</span>
            <input
              required
              name="image"
              type="url"
              value={formData.image}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-[#18181c] px-3.5 py-2.5 text-sm text-white outline-none transition focus:border-purple-500/50"
              placeholder="https://example.com/sneaker.png"
            />
          </label>

          <button
            type="submit"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-500 sm:w-fit"
          >
            Save Product
          </button>
        </form>
      </section>
    </main>
  )
}

export default AddProductForm
