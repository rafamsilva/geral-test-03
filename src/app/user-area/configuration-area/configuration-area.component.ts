import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration-area',
  templateUrl: './configuration-area.component.html',
  styleUrls: ['./configuration-area.component.less']
})
export class ConfigurationAreaComponent implements OnInit {
  public email: string = 'danillofidel@gmail.com'

  constructor() { }

  ngOnInit() {
  }

}
