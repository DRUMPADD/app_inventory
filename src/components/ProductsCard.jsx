import '@/styles/ProductCard.css'; // Archivo CSS con estilos BEM

const ProductsCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-card__details">
        <h2 className="product-card__name">{product.name}</h2>
        <p className="product-card__category">Categoría: {product.category}</p>
        <p className="product-card__manufacturer">Proveedor: {product.manufacturer}</p>
        <button
          className="product-card__button"
          onClick={() => onAddToCart(product.id)}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;