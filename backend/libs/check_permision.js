import { ForbiddenError } from './forbidden_error.js';

export function checkPermission(req, role) {
  const roles = req.user?.roles?.split(',').map(i => i.trim());
  if (!roles || !roles.includes(role)) {
    throw new ForbiddenError();
  }
}