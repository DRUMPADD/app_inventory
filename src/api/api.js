
export const getProducts = async () => {
    try {
        const response = await fetch("http://localhost:8080/car");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error; // Re-throw the error so the caller can handle it
    }
};

export const createProduct = async (order) => {
    const response = await fetch("http://127.0.0.1:8082/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(order)
    }).json();
    return response;
}
export const getOrders = async () => await fetch("http://127.0.0.1:8082/pedidos").json();

export const createOrder = async (order) => {
    const response = await fetch("http://127.0.0.1:8082/pedidos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(order)
    }).json();
    return response;
}