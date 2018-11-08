import { Injectable } from "@angular/core";
import { Response, Headers, RequestOptions } from "../../node_modules/@angular/http";
import { House } from "src/app/shared/house.model";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { urlLocal } from "src/environments/urls.dev";


@Injectable()
export class HousesService{
  constructor(public http: HttpClient){

  }

  public getHouses(): Observable<any>{
    return this.http.get(`${urlLocal}/api/imoveis`)
  }

  public getHouse(id: number): Observable<any>{
    return this.http.get(`${urlLocal}/api/imoveis/${id}`)
  }

  public deleteHouse(id: number): Observable<any>{
    return this.http.delete(`${urlLocal}/api/imoveis/${id}`)
  }

  public registerHouse(data: House): Observable<any>{
    return this.http.post<House>(`${urlLocal}/api/registro/imovel`,data)
  }


}
