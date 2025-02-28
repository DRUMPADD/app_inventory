import { useEffect, useState } from 'react';
import '@/styles/Inventory.css';
import { useNavigate } from 'react-router';
import CustomButton from '@/components/CustomButton';
import { getProducts } from '@/api/api';
// const data = [
//     { id: 1, name: "Laptop", category: "Electronics", manufacturer: "BrandA" },
//     { id: 2, name: "Phone", category: "Electronics", manufacturer: "BrandB" },
//     { id: 3, name: "Table", category: "Furniture", manufacturer: "BrandC" },
//     { id: 4, name: "Chair", category: "Furniture", manufacturer: "BrandC" },
// ];

const Inventory = () => {
    const navigate = useNavigate();
    const [productData, setProductData] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await getProducts();
            const products= await res.json();
            setProductData(products);
        };
        fetchProducts();
    }, []);

    const handleViewDetails = (id) => {
        navigate(`/product-details/${id}`)
    }

    const handleAdd = () => {
        alert("Añadir Producto");
    };

    const handleEdit = () => {
        alert("Editar Producto");
    };

    const handleDelete = () => {
        alert("Eliminar Producto");
    };
    return (
    <div className="inventory">
        <h1 className="inventory__title">Inventario</h1>
        {productData.length === 0 ? (
            <p className="inventory__empty">No hay productos disponibles en el inventario.</p>
        ) : (
            <ul className="inventory__list">
            {productData.map((product) => (
                <li key={product.id} className="inventory__item">
                    <h2 className="inventory__item-name">{product.name}</h2>
                    <p className="inventory__item-category">Categoría: {product.category}</p>
                    <p className="inventory__item-manufacturer">Proveedor: {product.manufacturer}</p>
                    <button className="inventory__item-button" onClick={() => handleViewDetails(product.id)}>Ver Detalles</button>
                </li>
            ))}
            </ul>
        )}

        <div className='inventory__actions'>
            <CustomButton label="Añadir Producto" onClick={handleAdd} />
            <CustomButton label="Editar Producto" onClick={handleEdit} />
            <CustomButton label="Eliminar Producto" onClick={handleDelete} />
        </div>
    </div>
    );
};

export default Inventory;
