import { Injectable } from "../../node_modules/@angular/core";
import { Http, Response } from "../../node_modules/@angular/http";


import { User } from "../shared/user.model";
import { EventEmitter } from "events";
import { isEmpty } from "lodash";


@Injectable()
export class LoginCheckService{
  public changedStateLogin = new EventEmitter();

  constructor(public http: Http){}

  public checkUser(user,pass): Promise<any>{
    return this.http.get(`http://localhost:3000/user?email=${user}&pass=${pass}`)
    .toPromise()
    .then((response: Response) => response.json());
  }

}
