import './Catalogo.css';
import React from 'react';
import { PRODUCTS } from './product';
import { Producto } from './Producto';
import { Api } from '../../lib/api';

const Catalogo = () => {

  // Función para manejar el clic del botón en Producto
  const handleAddToCart = async (ID, Precio,Nombre,Imagen) => {
    try {
      // Obtener el UUID del usuario (puede venir de localStorage, un estado global, etc.)
      const userUUID = sessionStorage.getItem('uuid'); 

      if (!userUUID) {
        console.error("No se encontró el UUID del usuario");
        return;
      }

      // Enviar solicitud POST con el ID del producto, precio y el UUID del usuario
      const response = await Api.post('agregar-producto', {
        body: { userUUID, ID, Precio, Nombre, Imagen }, // No usar JSON.stringify aquí
      });

      // Manejar la respuesta
      if (response.ok) {
        console.log("Producto agregado exitosamente");
      } else {
        console.error("Error al agregar el producto");
      }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <section className="contenido">
      <div className="mostrador" id="mostrador">
        <div className="fila">
          {PRODUCTS.map((product) => (
            <Producto
              key={product.id}
              data={product}
              onAddToCart={handleAddToCart} // Pasar directamente la función
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalogo;