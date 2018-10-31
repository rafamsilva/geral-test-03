import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.less']
})
export class UserAreaComponent implements OnInit {
  public userType: number = 1 //aqui menu varia

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.getUserData()
  }

  getUserData(): void{
    this.userService.getUser('danillopkt@hotmail.com').subscribe((data)=>{
      console.log(data)
    })
  }

}
