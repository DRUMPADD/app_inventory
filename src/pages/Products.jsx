import {useState} from 'react'
import ProductsCard from "@/components/ProductsCard";
import SearchBar from "@/components/SearchBar";
import useSearchProduct from "@/hooks/useSearchProduct";
import '@/styles/products.css'
const productData = [
  { id: 1, name: "Laptop", category: "Electronics", manufacturer: "BrandA" },
  { id: 2, name: "Phone", category: "Electronics", manufacturer: "BrandB" },
  { id: 3, name: "Table", category: "Furniture", manufacturer: "BrandC" },
  { id: 4, name: "Chair", category: "Furniture", manufacturer: "BrandC" },
];

function Products() {

  const {query, results, handleSearch} = useSearchProduct(productData, ['name', 'category', 'manufacturer'])

  const [productCard, setProductCard] = useState([]);
  const handleAddToCard = (product) => {
    console.log(product);
    alert("Añadido al carrito")
    setProductCard(product);
  }
  return (
    <section className='products'>
        <h1>Productos</h1>
        <SearchBar handleSearch={handleSearch} query={query} />

        <ul className="products-list">
          {results.map((product) => (
            <ProductsCard product={product} key={product.id} onAddToCart={handleAddToCard} />
          ))}
        </ul>
    </section>
  )
}

export default Products