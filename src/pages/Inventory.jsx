import { useEffect, useState } from 'react';
import '@/styles/Inventory.css';
// import { useNavigate } from 'react-router';
import CustomButton from '@/components/CustomButton';
import { getProducts, createProduct, getProductById, getProductByBrand, deleteProduct } from '@/api/api';

const Inventory = () => {
    // const navigate = useNavigate();
    const [render, setRender] = useState(false);
    const [productData, setProductData] = useState([]);
    // const [setSelectedProduct] = useState(null);
    const [setIsModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const [inputId, setInputId] = useState('');
    const [inputBrand, setInputBrand] = useState('');

    const [model, setModel] = useState('');
    const [yearOfManufacture, setYearOfManufacture] = useState('');
    const [brand, setBrand] = useState('');
    const [ownerName, setOwnerName] = useState('');
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getProducts();
                setProductData(products.content);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
        console.log(productData);
    }, [render, productData]);

    // const handleViewDetails = (id) => {
    //     navigate(`/product-details/${id}`)
    // }

    const handleAdd = () => {
        setIsAddModalOpen(true);
        // setRender(false);
    };

    // const handleEdit = () => {
    //     alert("Editar Producto");
    // };


    const handleDelete = async (id) => {
        try {
            await deleteProduct(id);
            try {
                const products = await getProducts();
                setProductData(products.content);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const handleSearch = async () => {
        if (!inputId && !inputBrand) {
            try {
                const products = await getProducts();
                setProductData(products.content);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
            return;
        }
        if (!inputId) {
            try {
                const products = await getProductByBrand(inputBrand);
                setProductData(products.content);
            } catch (error) {
                console.error("Error fetching products by brand:", error);
            }
            return;
        }
        try {
            const products = await getProductById(inputId);
            setProductData(products.content);
        } catch (error) {
            console.error("Error fetching products by brand:", error);
        }

    };

    // const openModal = (product) => {
    //     setSelectedProduct(product);
    //     setIsModalOpen(true);

    // };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsAddModalOpen(false);
        setRender(true);
        setModel('');
        setYearOfManufacture('');
        setBrand('');
        setOwnerName('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aqui irian las validaciones y el post a la api
        if (!model || !yearOfManufacture || !brand || !ownerName) {
            alert("Por favor, rellena todos los campos");
            return
        }

        const newProduct = {
            brand: brand,
            model: model,
            yearOfManufacture: parseInt(yearOfManufacture),
            owners: [{ name: ownerName, age: 25, isActive: true }],
        };

        try {
            const agregarProducto = await createProduct(newProduct);
            console.log("Nuevo producto:", agregarProducto);
            closeModal();
        } catch (error) {
            console.error("Error al agregar el producto:", error);
        }
    };

    const tableHeaderStyle = {
        borderBottom: '1px solid #ddd',
        padding: '8px',
        textAlign: 'left',
    };

    const tableRowStyle = {
        borderBottom: '1px solid #eee',
    };

    const tableCellStyle = {
        padding: '8px',
        textAlign: 'left',
    };

    const btnDanger = {
        background: '#ff0000e6'
    };

    const btnContainer = {
        display: 'flex',
        gap: '1em'
    };

    const modalOverlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    };

    const modalStyle = {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '500px',
        width: '90%',
    };

    const containerForm = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1em'
    };

    const containerFormInput = {
        display: 'flex'
    };

    const labelForm = {
        width: '75%'
    };

    const inputForm = {
        width: '-webkit-fill-available',
        padding: '0 .5em'
    };

    const containerFormBtns = {
        display: 'flex',
        gap: '1em',
        margiTop: '1em'
        // width: '-webkit-fill-available',
    };

    const btn = {
        width: '-webkit-fill-available',
    };

    const btnDangerForm = {
        background: '#ff0000e6',
        width: '-webkit-fill-available'
    };

    const btnSearch = {
        background: 'gray',
        width: '10%'
    };

    return (
        <div style={{ padding: '20px', height: '83.3vh' }}>
            <div style={btnContainer}>
                <CustomButton label="Añadir Producto" onClick={handleAdd} />
                <label htmlFor="inputBusquedaId">Busqueda por id:</label>
                <input id='inputBusquedaId' type="text" value={inputId} onChange={(e) => setInputId(e.target.value)} />
                <label htmlFor="inputBusquedaMarca">Busqueda por marca:</label>
                <input id='inputBusquedaMarca' type="text" value={inputBrand} onChange={(e) => setInputBrand(e.target.value)} />
                <CustomButton label="Buscar" style={btnSearch} onClick={handleSearch} />
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={tableHeaderStyle}>ID</th>
                        <th style={tableHeaderStyle}>Nombre del auto</th>
                        <th style={tableHeaderStyle}>Año de manufactura</th>
                        <th style={tableHeaderStyle}>Marca</th>
                        <th style={tableHeaderStyle}>Propietarios</th>
                        <th style={tableHeaderStyle}>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {productData.map((product) => (
                        <tr key={product.id} style={tableRowStyle}>
                            <td style={tableCellStyle}>{product.id}</td>
                            <td style={tableCellStyle}>{product.model}</td>
                            <td style={tableCellStyle}>{product.yearOfManufacture}</td>
                            <td style={tableCellStyle}>{product.brand}</td>
                            <td style={tableCellStyle}>{product.owners[0].name}</td>
                            <td style={tableCellStyle}><CustomButton label="Eliminar" style={btnDanger} onClick={() => handleDelete(product.id)} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isAddModalOpen && (
                <div style={modalOverlayStyle}>
                    <div style={modalStyle}>
                        <h2>Añadir Producto</h2>
                        <form style={containerForm} onSubmit={handleSubmit}>
                            <div style={containerFormInput}>
                                <label style={labelForm}>Nombre del auto:</label>
                                <input style={inputForm} type="text" value={model} onChange={(e) => setModel(e.target.value)} />
                            </div>
                            <div style={containerFormInput}>
                                <label style={labelForm}>Año de manufactura:</label>
                                <input style={inputForm} type="number" value={yearOfManufacture} onChange={(e) => setYearOfManufacture(e.target.value)} />
                            </div>
                            <div style={containerFormInput}>
                                <label style={labelForm}>Marca:</label>
                                <input style={inputForm} type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
                            </div>
                            <div style={containerFormInput}>
                                <label style={labelForm}>Nombre del propietario:</label>
                                <input style={inputForm} type="text" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} />
                            </div>
                            <div style={containerFormBtns}>
                                <button style={btn} type="submit">Añadir</button>
                                <button style={btnDangerForm} type="button" onClick={closeModal}>Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Inventory;
