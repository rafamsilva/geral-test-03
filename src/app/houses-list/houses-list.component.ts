import { Component, OnInit } from '@angular/core';
import { HousesService } from '../houses.service';
import { House } from 'src/shared/house.model';

@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.component.html',
  styleUrls: ['./houses-list.component.less']
})
export class HousesListComponent implements OnInit {
  public houses: House[];

  constructor(private housesService: HousesService) { }

  ngOnInit() {
    this.getHousesList()
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


