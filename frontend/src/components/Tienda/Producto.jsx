import React from "react";
export const Producto = (props) =>{
    const {id, ProductName,Price,Image} = props.data;
    return <div class="item">
          <div class="contenedor-foto">
            <img src={Image} alt="" />  
            </div>
        <p class="descripcion">{ProductName}</p>
        <span class="precio">${Price} </span>
        <button class="boton" onSubmit={id}>AGREGAR AL CARRITO</button> 
    </div>;
};