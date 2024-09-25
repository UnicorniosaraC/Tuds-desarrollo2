import { asyncHandler } from '../../libs/async_handler.js';
import { LoginController } from './login_controller.js';

export function configureLoginRoutes(router) {  
  // Puedes cambiar '/login' a cualquier otra ruta que desees
  router.post('/login', asyncHandler(LoginController, 'post'));
}



































