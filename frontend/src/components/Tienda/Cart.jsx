import React, { useEffect, useState } from "react";
import { Api } from '../../lib/api';
import './Cart.css';

const Cart = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchUserProducts = async () => {
      const userUUID = sessionStorage.getItem('uuid'); // O desde otro almacenamiento global
      console.log("UUID obtenido:", userUUID); // Log para verificar el UUI
      if (!userUUID) {
        console.error("UUID del usuario no encontrado en sessionStorage");
        return;
      }

      try {
        const response = await Api.get(`agregar-producto/${userUUID}`);
        const user = await response.json();
        setProductos(user.productos); // Suponiendo que el array de productos esté en `user.productos`
      } catch (error) {
        console.error("Error al obtener los productos del usuario:", error);
      }
    };

    fetchUserProducts();
  }, []);

  return (
       <section className="content">
          {productos.map(product => (
          <div className="Columna">
          <div className="linea">
          <div className="Producto">
         <div className="ImagenProd">
           <img src={product.Imagen} style={{ width: '207px', height: 'auto' }}/>
         </div>
         <p className="Desc" style={{fontSize:'50px'}}>{product.Nombre}</p>
         <span className="Price">${product.Precio}
         </span>
          </div>
          </div>
          </div>
          ))}
       </section>
     );
   };
export default Cart;