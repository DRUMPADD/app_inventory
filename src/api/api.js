
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
        throw error;
    }
};

export const createProduct = async (order) => {
    try {
        const response = await fetch("http://localhost:8080/car", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
        });

        if (!response.ok) {
            const message = `Error en la solicitud: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al crear el producto:", error);
        throw error;
    }
};