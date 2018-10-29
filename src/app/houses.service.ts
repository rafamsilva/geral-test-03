import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "../../node_modules/@angular/http";
import { House } from "src/app/shared/house.model";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()
export class HousesService{
  constructor(public http: Http){

  }

  public getHouses(): Promise<House[]>{
    return this.http.get('http://localhost:3000/houses')
    .toPromise()
    .then((response: Response) => response.json());
  }

  public deleteHouse(id: number): Observable<any>{
    alert('na função de delete')
    return this.http.delete(`http://localhost:3000/houses/${id}`)
  }

  public registerHouse(data: House): Observable<any>{
    console.log('na função de registro', data)

    let headers: Headers = new Headers()
    headers.append('Content-type', 'application/json')
    return this.http.post('http://localhost:3000/houses',
    JSON.stringify(data),
    new RequestOptions({ headers: headers}))
    .pipe(map((response: Response)=>response.json()) )
  }


}
