import { useParams } from 'react-router'
import '@/styles/ProductDetails.css'

function ProductDetails({ products }) {
    const { id } = useParams();
    const product = Array(products).find((item) => item.id === parseInt(id));

    if(!product) {
        return <p className='product-details__error'>El producto no fue encontrado.</p> 
    }
    return (
        <div className="product-details">
            <h1 className="product-details__title">Detalles del Producto</h1>
            <div className="product-details__info">
                <h2 className="product-details__name">{product.name}</h2>
                <p className="product-details__category">Categoría: ${product.price}</p>
                <p className="product-details__manufacturer">Proveedor: {product.category}</p>
            </div>
        </div>
    )
}

export default ProductDetails