import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.less']
})
export class UserAreaComponent implements OnInit {
  public userType: number = 2

  constructor() { }

  ngOnInit() {
  }

}
