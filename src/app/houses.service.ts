import { Injectable } from "@angular/core";
import { House } from "src/app/shared/house.model";
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { urlExternal } from "src/environments/urls.dev";


@Injectable()
export class HousesService{
  public houses = new BehaviorSubject(House)

  constructor(public http: HttpClient){

  }

  public getHouses(): Observable<any>{
    return this.http.get(`${urlExternal}/api/imoveis`)
  }

  public getHouse(id: number): Observable<any>{
    return this.http.get(`${urlExternal}/api/imoveis/${id}`)
  }

  public deleteHouse(id: number): Observable<any>{
    return this.http.delete(`${urlExternal}/api/imoveis/${id}`)
  }

  public registerHouse(data: House): Observable<any>{
    return this.http.post<House>(`${urlExternal}/api/registro/imovel`,data)
  }

}
