import 'react'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Orders from './pages/Orders'
import Products from './pages/Products'
import Suppliers from './pages/Suppliers'
import Navbar from './components/Navbar'

import '@/styles/index.css'
import Footer from './components/Footer'
import Inventory from './pages/Inventory'
import ProductDetails from './components/ProductDetails'
import NotFound from './components/NotFound'

const productData = [
  { id: 1, name: "Laptop", category: "Electronics", manufacturer: "BrandA" },
  { id: 2, name: "Phone", category: "Electronics", manufacturer: "BrandB" },
  { id: 3, name: "Table", category: "Furniture", manufacturer: "BrandC" },
  { id: 4, name: "Chair", category: "Furniture", manufacturer: "BrandC" },
];
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/suppliers' element={<Suppliers />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/product-details/:id' element={<ProductDetails products={productData} />} />
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