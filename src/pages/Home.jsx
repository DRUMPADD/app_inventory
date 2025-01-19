import { Link } from "react-router"

function Home() {
    return (
        <section className='home'>
            <h1>Aplicación de inventario</h1>
            <Link to={'/inventory'}>Ir al inventario</Link>
        </section>
    )
}

export default Home