import {useEffect, useState} from 'react'
import ProductsCard from "@/components/ProductsCard";
import SearchBar from "@/components/SearchBar";
import useSearchProduct from "@/hooks/useSearchProduct";
import useForm from '@/hooks/useForm';
const productData = [
  { id: 1, name: "Laptop", category: "Electronics", manufacturer: "BrandA" },
  { id: 2, name: "Phone", category: "Electronics", manufacturer: "BrandB" },
  { id: 3, name: "Table", category: "Furniture", manufacturer: "BrandC" },
  { id: 4, name: "Chair", category: "Furniture", manufacturer: "BrandC" },
];

function Products() {

  const {query, results, handleSearch} = useSearchProduct(productData, ['name', 'category', 'manufacturer'])

  const [productsCard, setProductsCard] = useState([]);
  const handleAddToCard = (product) => {
    setProductsCard(product);
    console.log(productsCard)
    alert("Añadido al carrito");
  }

  const {formValues, handleChange, resetForm} = useForm({
    name: "",
    category: "",
    manufacturer: ""
  });
  const [disableSubmit, setDisableSubmit] = useState(true);

  useEffect(() => {
    const isFormComplete = Object.values(formValues).every((value) => value.trim() !== "");
    setDisableSubmit(!isFormComplete);
  }, [formValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    productData.push(formValues);
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
          Categoría:
          <input
            type="text"
            name="category"
            value={formValues.category}
            onChange={handleChange}
            placeholder="Categoría"
          />
        </label>

        <label>
          Proveedor:
          <input
            type="text"
            name="manufacturer"
            value={formValues.manufacturer}
            onChange={handleChange}
            placeholder="Proveedor"
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