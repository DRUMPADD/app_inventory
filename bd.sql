CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  category VARCHAR(255),
  price DECIMAL,
  stock INT
);

CREATE TABLE suppliers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  contact_email VARCHAR(255),
  phone VARCHAR(255)
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  supplier_id INT,
  product_id INT,
  quantity INT,
  status VARCHAR(50),
  FOREIGN KEY (supplier_id) REFERENCES suppliers(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Relaciones:
--Un producto puede ser pedido a través de la tabla orders.
--Un pedido se hace a un proveedor específico.
