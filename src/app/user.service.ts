import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/shared/user.model";
import { HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";


@Injectable()
export class UserService{
  public user: User;
  constructor(
    private http: HttpClient
    ){

  }

  getUser(email: string): Observable<any>{
    return this.http.get(`http://192.168.3.121:0034/api/users/${email}`)
  }

  getAllUsers(): Observable<any>{
    return this.http.get('http://192.168.3.121:0034/api/registro')
  }

  deleteUser(id: number): Observable<any>{
    alert('na função de delete')
    return this.http.delete(`http://localhost:3000/user/${id}`)
  }

  registerUser(data: User, employee: boolean): Observable<User>{
    this.filterUserReceived(data, employee)
    return this.http.post<User>('http://192.168.3.121:0034/api/registro',data)
  }

  private filterUserReceived(user: User, admin: boolean): void{
    console.log('na função de filtrar', user)
    delete user['confirmarSenha']
    user.funcionario = admin
  }




}
