import { Injectable } from "../../node_modules/@angular/core";
import { User } from "./shared/user.model";
import { EventEmitter } from "events";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { urlLocal } from "src/environments/urls.dev";
import { UserService } from './user.service';
import { map, retry } from "rxjs/operators";
import { Router } from "@angular/router";
import { LogStateService } from "./log-state.service";





@Injectable()
export class LoginCheckService{
  public changedStateLogin = new EventEmitter();
  public isAuth: boolean;

  constructor(
    public http: HttpClient,
    public userService: UserService,
    private route: Router,
    private loginState: LogStateService,
    ){}

  public tryLogin(user,pass): Observable<any>{
    return this.http.post<User>(`${urlLocal}/api/autenticacao`,{email: user, senha: pass})
  }

  public userLogout(){
    this.route.navigate(["./"]);
    this.loginState.changeStateLogin(false)
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('type')
    sessionStorage.removeItem('id')
  }

  public userIsAuth(){
    this.isAuth = true;
  }

  public saveUserData(loginData: string){
    this.userService.setUser(loginData);
  }

  public storageUserSession(type){
    sessionStorage.setItem('type', type )
  }

  public getUserType(){
    let type = sessionStorage.getItem('type');
    if(type == undefined || type == null){
      return false
    }else{
      return type
    }
  }

  public getUserSession(){
    let id = sessionStorage.getItem('id');
    if(id == undefined || id == null){
      return false
    }else{
      return true
    }
  }

}
