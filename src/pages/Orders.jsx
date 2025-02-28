import { useEffect, useState } from "react";
import '@/styles/Tasks.css'
import OrderForm from "@/components/OrderForm";
import { getProducts } from "@/api/api";
// const userProducts = [
//   { id: 1, name: "Laptop", price: 1200 },
//   { id: 2, name: "Phone", price: 800 },
//   { id: 3, name: "Table", price: 150 },
// ];

const Orders = () => {
  const [cart, setCart] = useState([]);
  const [userName, setUserName] = useState("");

  const [productData, setProductData] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await getProducts();
            const products= await res.json();
            setProductData(products);
        };
        fetchProducts();
    }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleCreateOrder = () => {
    if (!userName) {
      alert("Por favor, ingresa el nombre del usuario.");
      return;
    }
    alert(`Pedido creado para ${userName}: ${JSON.stringify(cart, null, 2)}`);
    setCart([]);
    setUserName("");
  };

  return (
    <section className="orders">
      <OrderForm cart={cart} onAddToCart={handleAddToCart} onCreateOrder={handleCreateOrder} userProducts={productData} />
    </section>
  );
};

export default Orders;