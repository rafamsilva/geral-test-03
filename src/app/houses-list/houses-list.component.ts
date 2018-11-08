import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";
import { HousesService } from "../houses.service";
import { House } from "src/app/shared/house.model";
import { ErrorHandlerService } from "../error-handler.service";
import { FavoriteService } from "../favorite.service";
import { LogStateService } from '../log-state.service';

@Component({
  selector: "app-houses-list",
  templateUrl: "./houses-list.component.html",
  styleUrls: ["./houses-list.component.less"]
})
export class HousesListComponent implements OnInit {
  @ViewChild("icon")
  icon: ElementRef;
  public isLogged: boolean;
  public conectionError: boolean;
  public houses: House[];
  public favoriteUrl: string = "../../assets/coracao_vazio.png";
  constructor(
    private housesService: HousesService,
    private errorService: ErrorHandlerService,
    public renderer: Renderer2,
    public favoriteService: FavoriteService,
    public logStateService: LogStateService
  ) {}

  ngOnInit() {
    this.getHousesList();
    this.checkState();
  }

  getHousesList() {
    this.housesService
      .getHouses()
      .subscribe(
        data => (this.houses = data.imoveis),
        error =>
          this.errorService.error.subscribe(
            state => (this.conectionError = state)
          )
      );
  }

  favoriteToggle(event) {
    let target = event.srcElement;
    let id = target.attributes.id.nodeValue;
    let src = target.attributes.src.value;
    this.changeImgSrc(id, src);
  }

  changeImgSrc(id, src) {
    if (src.includes("vazio")) {
      (<HTMLInputElement>document.getElementById(id)).src =
        "../../assets/coracao_cheio.png";
      this.editFavoriteList(id, true);
    } else {
      (<HTMLInputElement>document.getElementById(id)).src =
        "../../assets/coracao_vazio.png";
      this.editFavoriteList(id, false);
    }
  }

  editFavoriteList(id, action) {
    this.favoriteService.setFavorite(id, action);
  }

  checkState() {
    this.logStateService.atualState.subscribe(state => {
      this.isLogged = state;
    });
  }
}
