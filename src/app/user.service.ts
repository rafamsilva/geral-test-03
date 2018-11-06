import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/shared/user.model";
import { HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { urlLocal, urlMockup, mockupsEndPoints, urlExternal } from "src/environments/urls.dev";


@Injectable()
export class UserService{
  public loginData;
  public user: User;
  public userEmail: string = '';
  constructor(
    private http: HttpClient
    ){

  }

  setUser(data: any){
    this.loginData = data
  }

  getUser(): Observable<any>{
    return this.http.get(`${urlLocal}/api/usuarios/${this.loginData.usuarioID}`)
  }

  getUserName(): string{
    return this.user.nome
  }

  getAllUsers(): Observable<any>{
    return this.http.get(`${urlLocal}/api/usuarios`)
  }

  deleteUser(id: string): Observable<any>{
    return this.http.delete(`${urlLocal}/api/usuarios/${id}`)
  }

  registerUser(data: User, employee: boolean): Observable<User>{
    this.filterUserReceived(data, employee)
    return this.http.post<User>(`${urlLocal}/api/registro`,data)
  }

  private filterUserReceived(user: User, admin: boolean): void{
    delete user['confirmarSenha']
    user.funcionario = admin
  }




}
