import { useState } from 'react';
import '@/styles/OrderForm.css';
import CustomButton from '@/components/CustomButton';

const OrderForm = ({ userProducts, onAddToCart, onCreateOrder, cart }) => {
  const [userName, setUserName] = useState('');

  return (
    <div className="order-form">
      <h1 className="order-form__title">Creación de Pedidos para Usuarios</h1>
      <input
        type="text"
        placeholder="Nombre del Usuario"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="order-form__input"
      />
      <ul className="user-product-list">
        {userProducts.map((product) => (
          <li key={product.id} className="user-product-list__item">
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            <button
              className="user-product-list__button"
              onClick={() => onAddToCart(product)}
            >
              Añadir al Pedido
            </button>
          </li>
        ))}
      </ul>
      <div className="order-summary">
        <h2 className="order-summary__title">Resumen del Pedido</h2>
        {cart.length === 0 ? (
          <p className="order-summary__empty">No hay productos en el pedido.</p>
        ) : (
          <ul className="order-summary__list">
            {cart.map((item, index) => (
              <li key={index} className="order-summary__item">
                {item.name} (Precio: ${item.price})
              </li>
            ))}
          </ul>
        )}
        <CustomButton className={"order-summary__button"} onClick={onCreateOrder} disabled={cart.length === 0} label={'Crear Pedido'} />
        {/* <button
          className="order-summary__button"
          onClick={onCreateOrder}
          disabled={cart.length === 0}
        >
          Crear Pedido
        </button> */}
      </div>
    </div>
  );
};

export default OrderForm;
