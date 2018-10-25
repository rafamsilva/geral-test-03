import { Injectable } from "@angular/core";
import { Http, Response } from "../../node_modules/@angular/http";
import { House } from "src/shared/house.model";
import { Observable } from "rxjs";

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
    alert('no serviço')
    return this.http.delete(`http://localhost:3000/houses/${id}`)
  }


}
