import { House } from './../../shared/house.model';
import { UserService } from "./../../user.service";
import { Component, OnInit } from "@angular/core";
import { HousesService } from "src/app/houses.service";
import { User } from "../../shared/user.model";
import * as _ from "lodash";

@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.less"]
})
export class FavoritesComponent implements OnInit {
  public favorites: number[] = [];
  public houses: House[] = [];

  constructor(
    private housesService: HousesService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUserInfo();
  }

  removeFavoriteHouse(id: number) {
    /*this.housesService.deleteHouse(id).subscribe(
          data => this.getHousesList()
          )*/
  }

  getUserInfo() {
    this.userService
      .getUser(this.userService.getUserId())
      .subscribe(data => this.getFavoriteList(data.usuarios[0]));
  }

  getFavoriteList(data: User) {
    this.favorites = data.favoritos;
    this.getFavoriteHouses(this.favorites);
  }

  getFavoriteHouses(favorites) {
    favorites.forEach(e => {
      this.housesService.getHouse(e).subscribe(
        data => this.houses.push(data[0])
      )
    });
    this.houses;
  }
}
