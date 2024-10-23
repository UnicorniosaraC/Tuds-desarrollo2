import React from "react"
import { Link } from 'react-router-dom';
import {PRODUCTS} from './product'
import {Producto} from './Producto'
import './Catalogo.css'
const Cart = () => {
return(
    <section>
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
        <div>
    <button>
    <Link to ="/catalogo">Volver</Link>
    </button> 
    <button>
    <Link to ="/pagar">pagar</Link>
    </button> 
    </div>
  </section>
  )
}
export default Cart