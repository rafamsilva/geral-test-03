import { Injectable } from "../../node_modules/@angular/core";
import { User } from "./shared/user.model";
import { EventEmitter } from "events";
import { HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs";




@Injectable()
export class LoginCheckService{
  public changedStateLogin = new EventEmitter();
  public isAuth: boolean;

  constructor(public http: HttpClient){}

  public checkUser(user,pass): Observable<any>{
    return this.http.post<User>('http://192.168.3.121:0034/api/authenticate',{email: user, senha: pass})
  }

  public userIsAuth(){
    this.isAuth = true;
  }

  public storageUserSession(user: User){
    sessionStorage.setItem('user', JSON.stringify(user))
  }

  public getUserSession(){
    let session = sessionStorage.getItem('user')
    console.log(JSON.parse(session))
  }



}
