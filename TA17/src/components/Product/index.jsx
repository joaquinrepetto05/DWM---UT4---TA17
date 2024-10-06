import React from 'react';
import { useParams } from 'react-router-dom';

const productsData = {
  1: { name: "Producto 1", description: "Descripción del Producto 1", price: "$10" },
  2: { name: "Producto 2", description: "Descripción del Producto 2", price: "$20" },
  3: { name: "Producto 3", description: "Descripción del Producto 3", price: "$30" }
};

const Product = () => {
  const { id } = useParams();  // Obtener el parámetro 'id' de la URL

  const product = productsData[id];  // Buscar el producto basado en el ID

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Precio: {product.price}</p>
    </div>
  );
};

export default Product;