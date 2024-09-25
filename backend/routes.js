import { configureUserRoutes } from './components/users/routes.js';
import { configureLoginRoutes } from './components/login/routes.js';

export function configureRoutes(router) {
  configureUserRoutes(router);
  configureLoginRoutes(router);
}