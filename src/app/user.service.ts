import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "../../node_modules/@angular/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { User } from "src/app/_models/user.model";

@Injectable()
export class UserService{
  constructor(public http: Http){

  }

  public getAllUsers(): Promise<User[]>{
    return this.http.get('http://localhost:3000/user')
    .toPromise()
    .then((response: Response) => response.json());
  }

  public deleteUser(id: number): Observable<any>{
    alert('na função de delete')
    return this.http.delete(`http://localhost:3000/user/${id}`)
  }

  public registerUser(data: User): Observable<any>{
    console.log('na função de registro', data)

    let headers: Headers = new Headers()
    headers.append('Content-type', 'application/json')
    return this.http.post('http://localhost:3000/user',
    JSON.stringify(data),
    new RequestOptions({ headers: headers}))
    .pipe(map((response: Response)=>response.json()) )
  }


}
