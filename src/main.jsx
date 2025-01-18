import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

/*
1. App
Descripción: Componente raíz que engloba toda la aplicación y configura las rutas con React Router.
Ubicación: src/App.jsx
2. NavBar
Descripción: Barra de navegación con enlaces a las diferentes secciones de la aplicación.
Ubicación: src/components/NavBar.jsx
3. Footer
Descripción: Pie de página con información o enlaces adicionales.
Ubicación: src/components/Footer.jsx
4. Home
Descripción: Página de inicio con un mensaje de bienvenida y una descripción breve de la aplicación.
Ubicación: src/pages/Home.jsx
5. Products
Descripción: Página que muestra una lista de productos en inventario. Puede incluir un buscador y filtros.
Ubicación: src/pages/Products.jsx
6. ProductCard
Descripción: Componente individual para renderizar la información de un producto (nombre, precio, stock).
Ubicación: src/components/ProductCard.jsx
7. Orders
Descripción: Página que permite crear y gestionar pedidos para usuarios.
Ubicación: src/pages/Orders.jsx
8. Suppliers
Descripción: Página que permite gestionar las peticiones de material a proveedores.
Ubicación: src/pages/Suppliers.jsx
9. OrderSummary
Descripción: Componente para mostrar el resumen de un pedido, ya sea para proveedores o usuarios.
Ubicación: src/components/OrderSummary.jsx
10. SearchBar
Descripción: Barra de búsqueda que permite buscar productos en el inventario por diferentes atributos.
Ubicación: src/components/SearchBar.jsx
*/