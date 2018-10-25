import { Component, OnInit } from '@angular/core';
import { House } from 'src/shared/house.model';
import { HousesService } from '../../houses.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.less']
})
export class HousesComponent implements OnInit {
  public houses: House[];
  public id = 15

  constructor(private housesService: HousesService) { }

  ngOnInit() {
    this.getHousesList()
    console.log(this.houses)
  }

  getHousesList(){
    this.housesService.getHouses()
    .then((data: House[]) => {
      this.houses = data;
      console.log(this.houses)
    })
    .catch((data: any) => {});
  }

}
