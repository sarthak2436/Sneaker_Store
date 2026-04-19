import { useState } from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { StoreProvider, useStore } from './StoreContext'
import Sidebar from './components/Sidebar'
import TopNavbar from './components/TopNavbar'
import AddProductForm from './pages/AddProductForm'
import LoginPage from './pages/LoginPage'
import ProductDetails from './pages/ProductDetails'
import SellerDashboard from './pages/SellerDashboard'
import Storefront from './pages/Storefront'

function AppShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#18181c] text-white">
      <div className="mx-auto flex max-w-[1720px] flex-col gap-4 px-2.5 py-3 sm:px-4 sm:py-4 lg:flex-row lg:gap-5 lg:px-5 xl:px-6">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex min-w-0 flex-1 flex-col gap-4 lg:gap-5">
          <TopNavbar onMenuClick={() => setSidebarOpen(true)} />
          <Outlet />
        </div>
      </div>
    </div>
  )
}

function ProtectedRoute({ children }) {
  const { user } = useStore()
  const location = useLocation()

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return children
}

function PublicOnlyRoute() {
  const { user } = useStore()

  if (user) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicOnlyRoute />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route
        element={
          <ProtectedRoute>
            <AppShell />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Storefront />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/seller" element={<SellerDashboard />} />
        <Route path="/seller/add" element={<AddProductForm />} />
      </Route>
    </Routes>
  )
}

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App
