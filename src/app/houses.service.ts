import { Injectable } from "@angular/core";
import { Response, Headers, RequestOptions } from "../../node_modules/@angular/http";
import { House } from "src/app/shared/house.model";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { urlExternal } from "src/environments/urls.dev";


@Injectable()
export class HousesService{
  constructor(public http: HttpClient){

  }

  public getHouses(): Observable<any>{
    return this.http.get(`${urlExternal}/api/imoveis`)
  }

  public deleteHouse(id: number): Observable<any>{
    alert('na função de delete')
    return this.http.delete(`http://localhost:3000/houses/${id}`)
  }

  public registerHouse(data: House): Observable<any>{
    return this.http.post<House>(`${urlExternal}/api/registro/imovel`,data)
  }


}
