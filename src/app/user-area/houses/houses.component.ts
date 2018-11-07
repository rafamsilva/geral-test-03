//import { HOUSES } from './../../shared/houses-mock';
import { Component, OnInit } from '@angular/core';
import { House } from '../../shared/house.model';
import { HousesService } from '../../houses.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.less']
})
export class HousesComponent implements OnInit {
  //public housesMock: House[] = HOUSES
  public houses: House[];
  public id = 15

  constructor(private housesService: HousesService) { }

  ngOnInit() {
    this.getHousesList()
  }

  getHousesList(){
    this.housesService.getHouses()
    .subscribe(
       data => this.setHouses(data)
      )
  }

  setHouses(houses: any){
    this.houses = houses.imoveis
  }

  removeHouse(id: number){
    this.housesService.deleteHouse(id).subscribe()
  }

}
