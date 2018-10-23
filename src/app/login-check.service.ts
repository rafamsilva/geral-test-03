import { Injectable } from "../../node_modules/@angular/core";
import { Http, Response } from "../../node_modules/@angular/http";


import { User } from "../shared/user.model";


@Injectable()
export class LoginCheckService{
  constructor(public http: Http){}

  public getUsers(): Promise<User[]>{
    return this.http.get('http://localhost:3000/user')
    .toPromise()
    .then((response: Response) => response.json());
  }
}
