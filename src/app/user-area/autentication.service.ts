import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginCheckService } from '../login-check.service';

@Injectable()
export class AutenticationService implements CanActivate{
  constructor(private auth: LoginCheckService){

  }

  canActivate(){
    if(!this.auth.isAuth){
      return false
    }
      return true
  }
}
