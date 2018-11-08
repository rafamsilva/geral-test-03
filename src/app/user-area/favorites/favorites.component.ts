import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/shared/house.model';
import { HousesService } from 'src/app/houses.service';
import { User } from '../../shared/user.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.less']
})
export class FavoritesComponent implements OnInit {
  public favorites: number[] = [];
  public housesId: number[] = [];

  constructor(
    private housesService: HousesService,
    private userService: UserService
    ) { }

    ngOnInit() {
      this.getHousesList()
    }

    getHousesList(){
      this.housesService.getHouses()
      .subscribe(
        data => {
          this.setHouses(data.imoveis)
          this.getUserInfo()
        }
        )
      }

      setHouses(houses: any){
        houses.forEach( e =>{
          this.housesId.push(e._id)
        })
      }

      removeFavoriteHouse(id: number){
        /*this.housesService.deleteHouse(id).subscribe(
          data => this.getHousesList()
          )*/
        }

        getUserInfo(){
          this.userService.getUser().subscribe(
            data => this.getFavoriteList(data.usuarios[0])
            )
          }

          getFavoriteList(data: User){
            this.favorites = data.favoritos
            this.filterFavoriteHouses(this.housesId, this.favorites)
          }

          filterFavoriteHouses(houses, favorites){
            let x = _.concat(houses, favorites)
            let y = _.without(favorites, houses);
            let b = _.uniqWith(x);
          }



        }
