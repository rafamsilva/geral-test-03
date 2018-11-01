import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginCheckService } from '../login-check.service';

@Injectable()
export class AutenticationService implements CanActivate{
  constructor(private auth: LoginCheckService, private route : Router){

  }

  canActivate(){
    if(!this.auth.isAuth){
      // this.route.navigate(['/login'])
      return true
    }
      return true
  }
}
