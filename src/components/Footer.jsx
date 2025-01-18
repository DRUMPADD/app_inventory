import '@/styles/Footer.css'; // Archivo CSS para aplicar estilos con BEM

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer__container">
            <p className="footer__text">&copy; {new Date().getFullYear()} Inventario. Todos los derechos reservados.</p>
            <ul className="footer__links">
            <li className="footer__item">
                <a href="#" className="footer__link">Términos y condiciones</a>
            </li>
            <li className="footer__item">
                <a href="#" className="footer__link">Política de privacidad</a>
            </li>
            <li className="footer__item">
                <a href="#" className="footer__link">Contacto</a>
            </li>
            </ul>
        </div>
        </footer>
    );
};

export default Footer;