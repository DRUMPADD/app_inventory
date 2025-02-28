import { Link } from 'react-router'
import '@/styles/Navbar.css'

function Navbar () {
    return (
        <nav className="navbar">
            <div className="navbar__logo">Inventario</div>
            <ul className="navbar__list">
                <li className="navbar__item">
                <Link to="/">Inicio</Link>
                </li>
                <li className="navbar__item">
                <Link to="/products">Productos</Link>
                </li>
                <li className="navbar__item">
                <Link to="/inventory">Inventario</Link>
                </li>
                <li className="navbar__item">
                <Link to="/orders">Pedidos</Link>
                </li>
                {/* <li className="navbar__item">
                <Link to="/suppliers">Proveedores</Link>
                </li> */}
            </ul>
        </nav>
    )
}

export default Navbar