import { Injectable } from "../../node_modules/@angular/core";
import { Http, Response } from "../../node_modules/@angular/http";


import { User } from "./_models/user.model";
import { EventEmitter } from "events";



@Injectable()
export class LoginCheckService{
  public changedStateLogin = new EventEmitter();
  public isAuth: boolean;

  constructor(public http: Http){}

  public checkUser(user,pass): Promise<User>{
    return this.http.get(`http://localhost:3000/user?email=${user}&pass=${pass}`)
    .toPromise()
    .then((response: Response) => response.json());
  }

  public userIsAuth(){
    this.isAuth = true;
  }

}
