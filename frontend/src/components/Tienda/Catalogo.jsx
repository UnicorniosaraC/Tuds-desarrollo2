import './Catalogo.css'
import React from 'react';
import {PRODUCTS} from './product'
import {Producto} from './Producto'

const Catalogo = () => {
    console.log(PRODUCTS.id)
    return (
        <body>
        <section className="contenido">
            <div className="mostrador" id="mostrador">
            <div className="fila">
                {PRODUCTS.map((Product)=>(
                    <Producto data={Product}/>
                ))}
                </div>
            </div>
        </section>
        </body>
      );
    }
    export default Catalogo