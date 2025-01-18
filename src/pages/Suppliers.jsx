import { useState } from "react";
import '@/styles/Tasks.css'

const supplierProducts = [
  { id: 1, name: "Laptop", supplier: "Proveedor A", stock: 50 },
  { id: 2, name: "Phone", supplier: "Proveedor B", stock: 30 },
  { id: 3, name: "Table", supplier: "Proveedor C", stock: 20 },
];

const Suppliers = () => {
  const [order, setOrder] = useState([]);

  const handleAddToOrder = (product) => {
    setOrder((prevOrder) => [...prevOrder, product]);
  };

  const handlePlaceOrder = () => {
    alert(`Pedido realizado: ${JSON.stringify(order, null, 2)}`);
    setOrder([]);
  };

  return (
    <section className="suppliers">
      <h1>Petición de Material a Proveedores</h1>
      <ul className="supplier-list">
        {supplierProducts.map((product) => (
          <li key={product.id} className="supplier-list__item">
            <h2>{product.name}</h2>
            <p>Proveedor: {product.supplier}</p>
            <p>Stock Disponible: {product.stock}</p>
            <button onClick={() => handleAddToOrder(product)}>
              Añadir al Pedido
            </button>
          </li>
        ))}
      </ul>
      <div className="order-summary">
        <h2>Resumen del Pedido</h2>
        {order.length === 0 ? (
          <p>No hay productos en el pedido.</p>
        ) : (
          <ul>
            {order.map((item, index) => (
              <li key={index}>
                {item.name} (Proveedor: {item.supplier})
              </li>
            ))}
          </ul>
        )}
        <button onClick={handlePlaceOrder} disabled={order.length === 0}>
          Realizar Pedido
        </button>
      </div>
    </section>
  );
};

export default Suppliers;