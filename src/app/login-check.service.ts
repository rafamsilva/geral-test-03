import { Injectable } from "../../node_modules/@angular/core";
import { User } from "./shared/user.model";
import { EventEmitter } from "events";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { urlLocal, urlExternal } from "src/environments/urls.dev";
import { UserService } from './user.service';




@Injectable()
export class LoginCheckService{
  public changedStateLogin = new EventEmitter();
  public isAuth: boolean;

  constructor(
    public http: HttpClient,
    public userService: UserService
    ){}

  public checkUser(user,pass): Observable<any>{
    return this.http.post<User>(`${urlExternal}/api/authenticate`,{email: user, senha: pass})
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
    let session = sessionStorage.getItem('user')
  }



}
