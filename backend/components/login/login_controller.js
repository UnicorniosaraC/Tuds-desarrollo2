import { Dependency } from '../../libs/dependency.js';

export class LoginController {
  constructor(){
    this.loginService = Dependency.get('loginService');
  }


  async post(req,res){
    const result = await this.loginService.login(req.body);
    res.send(result);
    //res.status(204).end();
  }
}
