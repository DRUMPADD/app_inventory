import React from 'react'
import { Link } from 'react-router'
import '@/styles/NotFound.css'

function NotFound() {
  return (
    <div className="notfound">
        <h1 className="notfound__title">404</h1>
        <p className="notfound__message">La página que buscas no existe.</p>
        <Link to="/" className="notfound__link">
            Regresar al inicio
        </Link>
    </div>
  )
}

export default NotFound