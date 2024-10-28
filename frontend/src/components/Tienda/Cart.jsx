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

  const handleEliminarProducto = (productID) => {
    setProductos(prevProductos => {
      const producto = prevProductos.find(prod => prod.ID === productID);

      if (producto) {
        if (producto.cantidad > 1) {
          // Reduce la cantidad
          return prevProductos.map(prod => 
            prod.ID === productID ? { ...prod, cantidad: prod.cantidad - 1, totalPrecio: prod.totalPrecio - producto.Precio } : prod
          );
        } else {
          // Elimina el producto si la cantidad es 1
          return prevProductos.filter(prod => prod.ID !== productID);
        }
      } else {
        console.error("Producto no encontrado");
        return prevProductos; // No se modifica el estado si no se encuentra el producto
      }
    });
  };

  return (
    <section className="content">
      {mostrarResumen ? (
        <Pagar productosAgrupados={productosAgrupados} total={total} />
      ) : (
        <>
          {productosAgrupados.map((product) => (
            <div className="Columna" key={product.ID}>
              <div className="linea">
                <div className="Producto">
                  <div className="ImagenProd">
                    <img src={product.Imagen} alt={product.Nombre} style={{ width: '207px', height: 'auto' }} />
                  </div>
                  <p className="Desc" style={{ fontSize: '50px' }}>{product.Nombre}</p>
                  <span className="Price">${product.totalPrecio.toFixed(2)}</span>
                  <p className="Cantidad">Cantidad: {product.cantidad}</p>
                  <button className="EliminarBtn" onClick={() => handleEliminarProducto(product.ID)}>
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
          <section>
            <p className="Total">Total: ${total.toFixed(2)}</p>
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