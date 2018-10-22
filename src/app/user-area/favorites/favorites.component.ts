import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.less']
})
export class FavoritesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public alertScheduleVisit(): void{
    alert('Visita agendada com sucesso!')
  }

}
