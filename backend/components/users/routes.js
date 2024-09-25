import { asyncHandler } from '../../libs/async_handler.js';
import { UserController } from './user_controller.js';

export function configureUserRoutes(router) {
  // Maneja las solicitudes GET al endpoint /user
  router.get('/user', asyncHandler(UserController, 'get'));
  
  // Maneja las solicitudes POST al endpoint /user
  router.post('/user', asyncHandler(UserController, 'post'));
}

