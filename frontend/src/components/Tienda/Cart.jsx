import React, { useEffect, useState } from "react";
import { Api } from '../../lib/api';
import Pagar from './Pagar';
import './Cart.css';

const Cart = () => {
  const [productos, setProductos] = useState([]);
  const [productosAgrupados, setProductosAgrupados] = useState([]);
  const [total, setTotal] = useState(0);
  const [mostrarResumen, setMostrarResumen] = useState(false);

  useEffect(() => {
    const fetchUserProducts = async () => {
      const userUUID = sessionStorage.getItem('uuid');
      if (!userUUID) {
        console.error("UUID del usuario no encontrado en sessionStorage");
        return;
      }

      try {
        const response = await Api.get(`agregar-producto/${userUUID}`);
        const user = await response.json();
        setProductos(user.productos);
      } catch (error) {
        console.error("Error al obtener los productos del usuario:", error);
      }
    };

    fetchUserProducts();
  }, []);

  // Agrupar productos y calcular el total
  useEffect(() => {
    const agruparProductos = () => {
      const agrupados = productos.reduce((acc, producto) => {
        const existente = acc.find(p => p.ID === producto.ID);
        if (existente) {
          existente.cantidad += 1;
          existente.totalPrecio += producto.Precio;
        } else {
          acc.push({ ...producto, cantidad: 1, totalPrecio: producto.Precio });
        }
        return acc;
      }, []);

      setProductosAgrupados(agrupados);
      const nuevoTotal = agrupados.reduce((acc, prod) => acc + prod.totalPrecio, 0);
      setTotal(nuevoTotal);
    };

    agruparProductos();
  }, [productos]);

  // Función para eliminar un producto
  const handleEliminarProducto = async (productID) => {
    const userUUID = sessionStorage.getItem('uuid');
    if (!userUUID) {
      console.error("UUID del usuario no encontrado en sessionStorage");
      return;
    }

    try {
      await Api.delete(`eliminar-producto/${userUUID}/${productID}`);
      setProductos(prevProductos => prevProductos.filter(product => product.ID !== productID));
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };

  return (
    <section className="content">
      {mostrarResumen ? (
        <Pagar productosAgrupados={productosAgrupados} total={total} />
      ) : (
        <>
          {productosAgrupados.map((product, index) => (
            <div className="Columna" key={index}>
              <div className="linea">
                <div className="Producto">
                  <div className="ImagenProd">
                    <img src={product.Imagen} alt={product.Nombre} style={{ width: '207px', height: 'auto' }} />
                  </div>
                  <p className="Desc" style={{ fontSize: '50px' }}>{product.Nombre}</p>
                  <span className="Price">${product.totalPrecio}</span>
                  <p className="Cantidad">Cantidad: {product.cantidad}</p>
                  <button className="EliminarBtn" onClick={() => handleEliminarProducto(product.ID)}>
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
          <section>
          <p className="Total">Total: ${total}</p>
          <button onClick={() => setMostrarResumen(true)} className="btn-pagar">
            Ir a Pagar
          </button>
          </section>
        </>
      )}
    </section>
  );
};

export default Cart;
