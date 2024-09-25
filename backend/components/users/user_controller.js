import { Dependency } from '../../libs/dependency.js';
import { checkPermission } from '../../libs/check_permision.js';

export class UserController {
  constructor() {
    this.userService = Dependency.get('userService');
  }

  async get(req, res) {
    checkPermission(req, 'admin');
    
    const userList = await this.userService.getList();
    res.send(userList); 
  }

  async post(req, res) {
    checkPermission(req, 'admin');
    
    await this.userService.create(req.body);
    res.status(204).end(); 
  }
}