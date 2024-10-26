import React from "react";

export const Producto = (props) => {
  const { id, ProductName, Price, Image } = props.data;
  const { onAddToCart } = props;

  return (
    <div className="item">
      <div className="contenedor-foto">
        <img src={Image} alt={ProductName} />
      </div>
      <p className="descripcion">{ProductName}</p>
      <span className="precio">${Price}</span>
      <button
        className="boton"
        onClick={() => onAddToCart(id, Price,ProductName,Image)} // Llama a onAddToCart con los valores correctos
      >
        AGREGAR AL CARRITO
      </button>
    </div>
  );
};