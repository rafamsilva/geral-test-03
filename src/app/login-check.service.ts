import { Injectable } from "../../node_modules/@angular/core";
import { User } from "./shared/user.model";
import { EventEmitter } from "events";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { urlLocal } from "src/environments/urls.dev";
import { UserService } from './user.service';
import { map, retry } from "rxjs/operators";





@Injectable()
export class LoginCheckService{
  public changedStateLogin = new EventEmitter();
  public isAuth: boolean;

  constructor(
    public http: HttpClient,
    public userService: UserService
    ){}

  public checkUser(user,pass): Observable<any>{
    return this.http.post<User>(`${urlLocal}/api/autenticacao`,{email: user, senha: pass})
    .pipe(retry(1));
  }

  public userIsAuth(){
    this.isAuth = true;
  }

  public saveUserData(email: string){
    this.userService.setUser(email);
  }

  public storageUserSession(user: User){
    sessionStorage.setItem('user', JSON.stringify(user))
  }

  public getUserSession(){
    let token = sessionStorage.getItem('token');
    if(token == undefined || token == null){
      return false
    }else{
      return true
    }
  }

  public removeUseSession(){
    sessionStorage.removeItem('token')
  }



}
