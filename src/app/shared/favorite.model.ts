export class Favorite {
  constructor(
    public full: boolean,
    public urlFullHearth: string = "../../assets/coracao_cheio.png",
    public urlEmptyHearth: string = "../../assets/coracao_vazio.png"
  ) {}

  public showHearth(): string {
    if (this.full) {
      return this.urlFullHearth;
    } else {
      return this.urlEmptyHearth;
    }
  }
}
