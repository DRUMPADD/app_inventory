import {useEffect, useState} from 'react'
import '@/styles/ProductsPage.css';
import ProductsCard from "@/components/ProductsCard";
import SearchBar from "@/components/SearchBar";
import useSearchProduct from "@/hooks/useSearchProduct";
import useForm from '@/hooks/useForm';
import { createProduct, getProducts } from '@/api/api';
// const productData = [
//   { id: 1, name: "Laptop", category: "Electronics", manufacturer: "BrandA" },
//   { id: 2, name: "Phone", category: "Electronics", manufacturer: "BrandB" },
//   { id: 3, name: "Table", category: "Furniture", manufacturer: "BrandC" },
//   { id: 4, name: "Chair", category: "Furniture", manufacturer: "BrandC" },
// ];

function Products() {
  const [productData, setProductData] = useState([]);
  const {query, results, handleSearch} = useSearchProduct(productData, ['name', 'category', 'price']);

  const [productsCard, setProductsCard] = useState([]);
  const handleAddToCard = (product) => {
    setProductsCard(product);
    console.log(productsCard)
    alert("Añadido al carrito");
  }

  const {formValues, handleChange, resetForm} = useForm({
    name: "",
    description: "",
    price: ""
  });
  const [disableSubmit, setDisableSubmit] = useState(true);

  useEffect(() => {
    const isFormComplete = Object.values(formValues).every((value) => value.trim() !== "");
    setDisableSubmit(!isFormComplete);
    const fetchProducts = async () => {
      const res = await getProducts();
      const products = await res.json();
      setProductData(products);
    }
    fetchProducts();
  }, [formValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(formValues);
    resetForm();
    alert('Producto almacenado');
  }
  return (
    <section className='products'>
      <h1>
        Productos
      </h1>
      <SearchBar handleSearch={handleSearch} query={query} />

      <ul className="products-list">
        {results.map((product) => (
          <ProductsCard product={product} key={product.id} onAddToCart={handleAddToCard} />
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="product-form">
        <h2>Agregar/Editar Producto</h2>

        <label>
          Nombre del Producto:
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            placeholder="Nombre del producto"
          />
        </label>

        <label>
          Descripción:
          <input
            type="text"
            name="description"
            value={formValues.description}
            onChange={handleChange}
            placeholder="Descripción"
          />
        </label>

        <label>
          Precio:
          <input
            type="number"
            step={"0.01"}
            name="price"
            value={formValues.price}
            onChange={handleChange}
            placeholder="Precio"
          />
        </label>

        <div className="form-buttons">
          <button type="submit" disabled={disableSubmit}>Guardar</button>
          <button type="button" onClick={resetForm}>
            Limpiar
          </button>
        </div>
      </form>
    </section>
  )
}

export default Products