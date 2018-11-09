import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/shared/user.model";
import { HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { urlLocal } from "src/environments/urls.dev";
import { LogStateService } from "./log-state.service";


@Injectable()
export class UserService{
  public loginData;
  public user: User;
  public loginSucessData: any;
  public userEmail: string = '';
  constructor(
    private http: HttpClient,
    private logService: LogStateService
    ){

  }

  setUser(data: any){
    this.user = data
  }

  getUserId(){
    return sessionStorage.getItem('id')
  }

  getUser(id: string): Observable<any>{
    return this.http.get(`${urlLocal}/api/usuarios/${id}`)
  }

  getUserName(){
    this.logService.setUserName(this.user.nome)
  }

  getAllUsers(): Observable<any>{
    return this.http.get(`${urlLocal}/api/usuarios`)
  }

  updateUser(id: number, favorites): Observable<any>{
    return this.http.put(`${urlLocal}/api/usuarios/${id}`, {favoritos : favorites})
  }

  deleteUser(id: string): Observable<any>{
    return this.http.delete(`${urlLocal}/api/usuarios/${id}`)
  }

  registerUser(data: User, employee: boolean): Observable<User>{
    this.filterUserReceived(data, employee)
    return this.http.post<User>(`${urlLocal}/api/registro/usuario`,data)
  }

  private filterUserReceived(user: User, admin: boolean): void{
    delete user['confirmarSenha']
    user.funcionario = admin
  }




}
