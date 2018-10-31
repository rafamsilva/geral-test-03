import { Injectable } from "@angular/core";
import { Response, Headers, RequestOptions } from "../../node_modules/@angular/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { User } from "src/app/shared/user.model";
import { HttpClient } from "@angular/common/http";



@Injectable()
export class UserService{
  public user: User;
  constructor(private http: HttpClient){

  }

  getAllUsers(): Observable<any>{
    return this.http.get('http://localhost:3000/user')
  }

  deleteUser(id: number): Observable<any>{
    alert('na função de delete')
    return this.http.delete(`http://localhost:3000/user/${id}`)
  }

  registerUser(data: User, employee: boolean): Observable<User>{
    this.filterUserReceived(data, employee)
    return this.http.post<User>('http://localhost:3000/user',data)
  }

  private filterUserReceived(user: User, admin: boolean): void{
    console.log('na função de filtrar', user)
    delete user['confirmarSenha']
    user.funcionario = admin
  }




}
