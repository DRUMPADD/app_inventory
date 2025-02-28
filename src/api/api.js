
export const getProducts = async () => await fetch("http://127.0.0.1:8082/productos").json();

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