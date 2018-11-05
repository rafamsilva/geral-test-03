import { HOUSES } from './../shared/houses-mock';
import { Component, OnInit } from '@angular/core';
import { HousesService } from '../houses.service';
import { House } from 'src/app/shared/house.model';
import { ErrorHandlerService } from '../error-handler.service';

@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.component.html',
  styleUrls: ['./houses-list.component.less']
})
export class HousesListComponent implements OnInit {
  public housesMock: House[] = HOUSES;
  public houses: House[];
  public favoriteUrl: string = '../../assets/coracao_vazio.png';

  constructor(
    private housesService: HousesService,
    private errorHandler: ErrorHandlerService

    ) { }



  ngOnInit() {
    this.getHousesList()
  }

  getHousesList(){
    this.housesService.getHouses()
    .subscribe((data)=>{
    this.houses = data.imoveis
    //this.errorHandler.loginError(data)
    })
  }

  favoriteToggle(){

  }

}


