
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
        await fetch("http://localhost:8080/car", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
        });

    } catch (error) {
        console.error("Error al crear el producto:", error);
        throw error;
    }
};

export const getProductByBrand = async (brand) => {
    try {
        const response = await fetch(`http://localhost:8080/car/find?brand=${brand}`);
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("Producto no encontrado.");
            } else {
                throw new Error(`Error al obtener el producto. Código de estado: ${response.status}`);
            }
        }
        const data = await response.json();
        const reponseData = {
            content: data
        }
        return reponseData;
    } catch (error) {
        console.error("Error al obtener el producto:", error);
        throw error;
    }
};

export const getProductById = async (id) => {
    try {
        const response = await fetch(`http://localhost:8080/car/${id}`);
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("Producto no encontrado.");
            } else {
                throw new Error(`Error al obtener el producto. Código de estado: ${response.status}`);
            }
        }
        const data = await response.json();
        const reponseData = {
            content: [
                data
            ]
        }
        return reponseData;
    } catch (error) {
        console.error("Error al obtener el producto:", error);
        throw error;
    }
};

export const deleteProduct = async (id) => {
    try {
        const response = await fetch(`http://localhost:8080/car/${id}`, {
            method: 'DELETE',
        });

        return response;
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
        throw error;
    }
};