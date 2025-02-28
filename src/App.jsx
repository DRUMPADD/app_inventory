import 'react'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Orders from './pages/Orders'
import Products from './pages/Products'
// import Suppliers from './pages/Suppliers'
import Navbar from './components/Navbar'

import '@/styles/index.css'
import Footer from './components/Footer'
import Inventory from './pages/Inventory'
import ProductDetails from './components/ProductDetails'
import NotFound from './components/NotFound'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/orders' element={<Orders />} />
        {/* <Route path='/suppliers' element={<Suppliers />} /> */}
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/product-details/:id' element={<ProductDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

// ?? Tareas principales de la aplicación:
// Petición de material a proveedores.
// Creación de pedidos para ser enviados a usuarios.