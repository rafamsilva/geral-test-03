import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/shared/user.model";
import { HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { urlLocal, urlMockup, mockupsEndPoints, urlExternal } from "src/environments/urls.dev";


@Injectable()
export class UserService{
  public user: User;
  public userEmail: string = '';
  constructor(
    private http: HttpClient
    ){

  }

  setUser(email: string){
    this.userEmail = email
  }

  getUser(): Observable<any>{
    return this.http.get(`${urlExternal}/api/users/${this.userEmail}`)
  }

  getAllUsers(): Observable<any>{
    return this.http.get(`${urlExternal}/api/users`)
  }

  deleteUser(id: number): Observable<any>{
    alert('na função de delete')
    return this.http.delete(`${urlExternal}/api/users${id}`)
  }

  registerUser(data: User, employee: boolean): Observable<User>{
    this.filterUserReceived(data, employee)
    return this.http.post<User>(`${urlExternal}/api/registro`,data)
  }

  private filterUserReceived(user: User, admin: boolean): void{
    delete user['confirmarSenha']
    user.funcionario = admin
  }




}
