import { UserService } from './user.service';
import { Injectable } from "@angular/core";

@Injectable()
export class FavoriteService{
  private favorites: number

  constructor(
    private userservice: UserService
  ) { }

  setFavorite(id: number, action: boolean){
    if(action){
      this.favorites =id
      this.updateFavoriteDataBase(this.favorites)
    }else{
      //deletar do array de favoritos
    }
  }

  updateFavoriteDataBase(favorites: any){
    let id = this.userservice.getUserId();
    this.userservice.updateUser(id,favorites).subscribe(
      user => {
        this.favorites = user
        this.userservice.getUser().subscribe(
          data => this.userservice.setUser(data)
        )
        }
    )
  }


}
