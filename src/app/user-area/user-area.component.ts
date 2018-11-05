import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.less']
})
export class UserAreaComponent implements OnInit {
  public userType: number = 1;

  constructor(public userService: UserService) { }

  ngOnInit(): void{
    this.getUserData()
  }

  getUserData(): void{
    this.userService.getUser().subscribe((data)=>{
      this.checkUserTyper(data)
    })
  }

  checkUserTyper(user: User): void{
    if(user[0].admin){
      this.userType =  3;
    }else if(user[0].funcionario){
      this.userType = 2;
    }else{
      this.userType = 1;
    }
  }

}
