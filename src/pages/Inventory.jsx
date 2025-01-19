// import React from 'react';
import '@/styles/Inventory.css';
import { useNavigate } from 'react-router';
import CustomButton from '../components/customButton';
const productData = [
    { id: 1, name: "Laptop", category: "Electronics", manufacturer: "BrandA" },
    { id: 2, name: "Phone", category: "Electronics", manufacturer: "BrandB" },
    { id: 3, name: "Table", category: "Furniture", manufacturer: "BrandC" },
    { id: 4, name: "Chair", category: "Furniture", manufacturer: "BrandC" },
];

const Inventory = () => {
    const navigate = useNavigate();

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
                    <p className="inventory__item-price">Categoría: {product.category}</p>
                    <p className="inventory__item-category">Proveedor: {product.manufacturer}</p>
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
