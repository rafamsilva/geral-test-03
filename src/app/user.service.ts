import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "../../node_modules/@angular/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { User } from "src/app/shared/user.model";
import { remove } from "lodash";
import { forEach } from "@angular/router/src/utils/collection";

@Injectable()
export class UserService{
  public user: User;
  constructor(public http: Http){

  }

  getAllUsers(): Promise<User[]>{
    return this.http.get('http://localhost:3000/user')
    .toPromise()
    .then((response: Response) => response.json());
  }

  deleteUser(id: number): Observable<any>{
    alert('na função de delete')
    return this.http.delete(`http://localhost:3000/user/${id}`)
  }

  registerUser(data: User): Observable<User>{
    this.filterUserReceived(data)

    let headers: Headers = new Headers()
    headers.append('Content-type', 'application/json')
    return this.http.post('http://localhost:3000/user',
    JSON.stringify(data),
    new RequestOptions({ headers: headers}))
    .pipe(map((response: Response)=>response.json()) )
  }

  private filterUserReceived(user: User): void{
    console.log('na função de filtrar', user)
    delete user['confirmarSenha']
    user.admin = false
  }




}
