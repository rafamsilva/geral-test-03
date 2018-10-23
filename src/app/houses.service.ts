import { Injectable } from "@angular/core";
import { Http, Response } from "../../node_modules/@angular/http";
import { House } from "src/shared/house.model";

@Injectable()
export class HousesService{
  constructor(public http: Http){

  }

  public getHouses(): Promise<House[]>{
    return this.http.get('http://localhost:3000/houses')
    .toPromise()
    .then((response: Response) => response.json());
  }
}
