import { asyncHandler } from '../../libs/async_handler.js';
import { TiendaController, } from './TiendaController.js';

export function configureTiendaRoutes(router) {  

router.post('/agregar-producto',asyncHandler(TiendaController, 'agregarProducto'));

router.get('/agregar-producto',asyncHandler(TiendaController, 'obtenerProductos'));

router.get('/agregar-producto/:uuid', asyncHandler (TiendaController, 'obtenerProductosUsuario'));
router.delete('/eliminar-producto/:userUUID/:productIndex',asyncHandler(TiendaController,'eliminarProducto'));
}




