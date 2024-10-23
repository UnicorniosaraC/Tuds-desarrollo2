import './Catalogo.css'
import React from 'react';
import {PRODUCTS} from './product'
import {Producto} from './Producto'

const Catalogo = () => {
    return (
        <body>
        <section class="contenido">
            <div class="mostrador" id="mostrador">
            <div class="fila">
            {" "}
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