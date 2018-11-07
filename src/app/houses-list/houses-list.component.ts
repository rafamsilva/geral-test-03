import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { HousesService } from '../houses.service';
import { House } from 'src/app/shared/house.model';
import { ErrorHandlerService } from '../error-handler.service';

@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.component.html',
  styleUrls: ['./houses-list.component.less']
})
export class HousesListComponent implements OnInit {
  //public housesMock: House[] = HOUSES;
  @ViewChild('icon') icon: ElementRef
  public conectionError: boolean;
  public houses: House[];
  public favoriteUrl: string = '../../assets/coracao_vazio.png';
  constructor(
    private housesService: HousesService,
    private errorService: ErrorHandlerService,
    public renderer: Renderer2

    ) { }



  ngOnInit() {
    this.getHousesList()
  }

  getHousesList(){
    this.housesService.getHouses()
    .subscribe(
    data=> this.houses = data.imoveis,
    error => this.errorService.error.subscribe(state => this.conectionError = state)
    )
  }

  favoriteToggle(event){
    let target = event.srcElement
    let id = target.attributes.id.nodeValue
    let src = target.attributes.src.value
    this.changeImgSrc(id,src)
  }

  changeImgSrc(id, src){
    if(src.includes('vazio')){
    (<HTMLInputElement>document.getElementById(id)).src = '../../assets/coracao_cheio.png';
    }else{
      (<HTMLInputElement>document.getElementById(id)).src = '../../assets/coracao_vazio.png';
    }
  }



}


