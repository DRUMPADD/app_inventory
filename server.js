import express, { json } from 'express';
import { Pool } from 'pg';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());
app.use(json());

// Configuración de la conexión a la base de datos
const pool = new Pool({
  user: 'usuario',
  host: 'localhost',
  database: 'inventario',
  password: 'contraseña',
  port: 5432,
});

// Ruta para obtener productos
app.get('/api/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener productos');
  }
});

// Ruta para agregar un producto
app.post('/api/products', async (req, res) => {
  const { name, category, price, stock } = req.body;
  try {
    await pool.query(
      'INSERT INTO products (name, category, price, stock) VALUES ($1, $2, $3, $4)',
      [name, category, price, stock]
    );
    res.status(201).send('Producto agregado');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al agregar el producto');
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});