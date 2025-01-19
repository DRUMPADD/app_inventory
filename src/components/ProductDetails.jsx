import { useParams } from 'react-router'
import '@/styles/ProductDetails.css'
const products = [
    { id: 1, name: "Laptop", category: "Electronics", manufacturer: "BrandA" },
    { id: 2, name: "Phone", category: "Electronics", manufacturer: "BrandB" },
    { id: 3, name: "Table", category: "Furniture", manufacturer: "BrandC" },
    { id: 4, name: "Chair", category: "Furniture", manufacturer: "BrandC" },
];
function ProductDetails() {
    const { id } = useParams();
    const product = products.find((item) => item.id === parseInt(id));
    console.log();
    if(!product) {
        return <p className='product-details__error'>El producto no fue encontrado.</p> 
    }
    return (
        <div className="product-details">
            <h1 className="product-details__title">Detalles del Producto</h1>
            <div className="product-details__info">
                <h2 className="product-details__name">{product.name}</h2>
                <p className="product-details__category">Categoría: {product.manufacturer}</p>
                <p className="product-details__manufacturer">Proveedor: {product.category}</p>
            </div>
        </div>
    )
}

export default ProductDetails