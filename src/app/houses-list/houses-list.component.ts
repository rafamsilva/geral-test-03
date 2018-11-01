import { Component, OnInit } from '@angular/core';
import { HousesService } from '../houses.service';
import { House } from 'src/app/shared/house.model';

@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.component.html',
  styleUrls: ['./houses-list.component.less']
})
export class HousesListComponent implements OnInit {
  public houses: House[];
  public favoriteUrl: string = '../../assets/coracao_vazio.png';

  constructor(private housesService: HousesService) { }



  ngOnInit() {
    this.getHousesList()
  }

  getHousesList(){
    this.housesService.getHouses()
    .subscribe((data)=>this.houses = data)
  }

  favoriteToggle(){
    console.log('adicionado')
  }

}


