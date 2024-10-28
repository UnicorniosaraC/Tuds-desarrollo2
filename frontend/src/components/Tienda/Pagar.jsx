import React from "react";
import './Pagar.css';
import {Link} from 'react-router-dom'

const Pagar = ({ productosAgrupados, total }) => {
  return (
    <section className="totalSection">
      <h2>Resumen del Carrito</h2>
      <p>Total a pagar: ${total.toFixed(2)}</p>
      <ul>
        {productosAgrupados.map((product, index) => (
          <li key={index} className="groupedProduct">
            {product.Nombre} (x{product.cantidad}) - ${product.totalPrecio.toFixed(2)}
          </li>
         
        ))}
      </ul>
      <button>
      Finalizar compra
      </button>
      <Link to='/Catalogo'>
      <button>
        Volver
      </button>
      </Link>
    </section>
  );
};

export default Pagar;