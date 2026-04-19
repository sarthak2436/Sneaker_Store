import { createContext, useContext, useMemo, useState } from 'react'

const StoreContext = createContext(null)

const initialInventory = [
  {
    id: 1,
    name: 'Nike Phantom Drift',
    currentPrice: 189,
    originalPrice: 249,
    description:
      'A futuristic high-top engineered for explosive takeoffs, plush heel comfort, and all-night city runs.',
    sizes: [7, 8, 9, 10, 11, 12],
    categoryTags: ['Basketball', 'Nike'],
    image:
      'https://pngimg.com/d/running_shoes_PNG5816.png',
  },
  {
    id: 2,
    name: 'Adidas Pulse Nova',
    currentPrice: 164,
    originalPrice: 219,
    description:
      'Lightweight knit support with a race-tuned midsole that blends street style and marathon energy.',
    sizes: [6, 7, 8, 9, 10, 11],
    categoryTags: ['Running', 'Adidas'],
    image:
      'https://pngimg.com/d/running_shoes_PNG5827.png',
  },
  {
    id: 3,
    name: 'Puma Shadow RS-X',
    currentPrice: 146,
    originalPrice: 199,
    description:
      'Chunky retro curves, layered suede detailing, and a plush ride built for lifestyle rotation.',
    sizes: [7, 8, 9, 10, 11],
    categoryTags: ['Lifestyle', 'Puma'],
    image:
      'https://pngimg.com/d/running_shoes_PNG5815.png',
  },
  {
    id: 4,
    name: 'Jordan Apex Flight',
    currentPrice: 228,
    originalPrice: 289,
    description:
      'Premium court DNA with responsive cushioning and a locked-in collar for aggressive cuts.',
    sizes: [8, 9, 10, 11, 12, 13],
    categoryTags: ['Basketball', 'Jordan'],
    image:
      'https://pngimg.com/d/running_shoes_PNG5821.png',
  },
  {
    id: 5,
    name: 'New Balance Nightcore 9060',
    currentPrice: 176,
    originalPrice: 235,
    description:
      'Sculpted foam geometry and layered mesh create a bold silhouette with everyday comfort.',
    sizes: [6, 7, 8, 9, 10],
    categoryTags: ['Lifestyle', 'New Balance'],
    image:
      'https://pngimg.com/d/running_shoes_PNG5820.png',
  },
  {
    id: 6,
    name: 'Asics Velocity Arc',
    currentPrice: 158,
    originalPrice: 208,
    description:
      'A performance trainer with breathable support zones and smooth rebound for daily mileage.',
    sizes: [7, 8, 9, 10, 11, 12],
    categoryTags: ['Running', 'Asics'],
    image:
      'https://pngimg.com/d/running_shoes_PNG5818.png',
  },
  {
    id: 7,
    name: 'Reebok Vector Blaze',
    currentPrice: 149,
    originalPrice: 205,
    description:
      'A sharp retro runner with layered panels, grippy traction, and a street-ready low profile.',
    sizes: [7, 8, 9, 10, 11],
    categoryTags: ['Lifestyle', 'Reebok'],
    image:
      'https://pngimg.com/d/running_shoes_PNG5824.png',
  },
  {
    id: 8,
    name: 'Converse Aero Jam',
    currentPrice: 171,
    originalPrice: 226,
    description:
      'Classic court influence remixed with cushioned support and a cleaner, elevated upper build.',
    sizes: [6, 7, 8, 9, 10, 11],
    categoryTags: ['Basketball', 'Converse'],
    image:
      'https://pngimg.com/d/running_shoes_PNG5819.png',
  },
  {
    id: 9,
    name: 'Nike Lunar Sprint GT',
    currentPrice: 193,
    originalPrice: 255,
    description:
      'Fast geometry, bold panel breaks, and lightweight foam that keeps every stride feeling snappy.',
    sizes: [7, 8, 9, 10, 11, 12],
    categoryTags: ['Running', 'Nike'],
    image:
      'https://pngimg.com/d/running_shoes_PNG5825.png',
  },
  {
    id: 10,
    name: 'Adidas Orbit Flux',
    currentPrice: 182,
    originalPrice: 238,
    description:
      'A futuristic lifestyle pair with plush underfoot comfort and layered textures for standout wear.',
    sizes: [6, 7, 8, 9, 10, 11],
    categoryTags: ['Lifestyle', 'Adidas'],
    image:
      'https://pngimg.com/d/running_shoes_PNG5823.png',
  },
]

export function StoreProvider({ children }) {
  const [user, setUser] = useState(null)
  const [inventory, setInventory] = useState(initialInventory)

  const login = ({ email }) => {
    setUser({
      name: email.split('@')[0] || 'Guest',
      email,
      role: 'shopper',
    })
  }

  const logout = () => {
    setUser(null)
  }

  const addProduct = ({ name, price, description, image }) => {
    const normalizedPrice = Number(price)

    const newProduct = {
      id: Date.now(),
      name,
      currentPrice: normalizedPrice,
      originalPrice: normalizedPrice + 55,
      description,
      sizes: [7, 8, 9, 10, 11],
      categoryTags: ['Lifestyle', 'New Drop'],
      image,
    }

    setInventory((currentInventory) => [newProduct, ...currentInventory])
  }

  const value = useMemo(
    () => ({
      user,
      inventory,
      login,
      logout,
      addProduct,
    }),
    [user, inventory],
  )

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const context = useContext(StoreContext)

  if (!context) {
    throw new Error('useStore must be used within a StoreProvider')
  }

  return context
}
