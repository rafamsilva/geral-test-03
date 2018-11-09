import { UserService } from './user.service';
import { Injectable } from "@angular/core";
import * as _ from 'lodash';

@Injectable()
export class FavoriteService{
  private favorites: number[] = []

  constructor(
    private userservice: UserService
  ) { }

  setFavorite(id: number, action: boolean){
    if(action){
      this.favorites.push(id)
    }else{
      let x = _.pull(this.favorites, id)
      this.favorites = x
    }
    this.updateFavoriteDataBase(this.favorites)
  }

  updateFavoriteDataBase(favorites: any){
    let id = this.userservice.getUserId();
    this.userservice.updateUser(id,favorites).subscribe(
      user => {let msg = user }
    )
  }


}
