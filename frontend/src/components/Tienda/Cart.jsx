import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Api } from '../../lib/api';
import './Catalogo'; // Asegúrate de tener un CSS para tus estilos

const Cart = () => {
  const [userProducts, setUserProducts] = useState([]);
  const userUUID = sessionStorage.getItem('uuid'); // Obtener el UUID del usuario desde el almacenamiento

  useEffect(() => {
    const fetchUserProducts = async () => {
      try {
        const response = await Api.get(`user/${userUUID}`); // Llamar al endpoint para obtener los productos
        if (response.ok) {
          const products = await response.json();
          setUserProducts(products);
        }
      } catch (error) {
        console.error("Error al obtener los productos del usuario:", error);
      }
    };

    fetchUserProducts();
  }, [userUUID]);

  return (
    <section>
      <div className="contenido">
        <div className="mostrador" id="mostrador">
          <div className="fila">
            {userProducts.map((product, index) => (
              <div key={index} className="producto">
                <h3>{product.ProductName}</h3>
                <p>Precio: ${product.Precio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <button>
          <Link to="/catalogo">Volver</Link>
        </button>
        <button>
          <Link to="/pagar">Pagar</Link>
        </button>
      </div>
    </section>
  );
};

export default Cart;