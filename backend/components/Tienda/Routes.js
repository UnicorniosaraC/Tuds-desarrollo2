import { asyncHandler } from '../../libs/async_handler.js';
import { TiendaController, } from './TiendaController.js';
import { TiendaService } from './TiendaService.js';

export function configureTiendaRoutes(router) {  

router.post('/agregar-producto',asyncHandler(TiendaController, 'agregarProducto'));


router.get('/agregar-producto',asyncHandler(TiendaController, 'obtenerProductos'));
}




