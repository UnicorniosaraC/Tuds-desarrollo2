import { configureUserRoutes } from './components/users/routes.js';
import { configureLoginRoutes } from './components/login/routes.js';
import { configureTiendaRoutes } from './components/Tienda/Routes.js';


export function configureRoutes(router) {
  configureUserRoutes(router);
  configureLoginRoutes(router);
  configureTiendaRoutes(router);
}