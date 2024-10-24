import React from "react";
export const Producto = (props) =>{
    const {id, ProductName,Price,Image} = props.data;
    return<div className="item">
          <div className="contenedor-foto">
            <img src={Image} alt="" />  
            </div>
        <p className="descripcion">{ProductName}</p>
        <span className="precio">${Price} </span>
        <button className="boton">AGREGAR AL CARRITO</button> 
    </div>;
};