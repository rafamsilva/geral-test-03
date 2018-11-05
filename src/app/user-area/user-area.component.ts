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
  public user: User;

  constructor(public userService: UserService) { }

  ngOnInit(): void{
    this.getUserData()
  }

  getUserData(): void{
    this.userService.getUser()
    .subscribe((user: any) => {
      this.checkUserTyper(user);
    })
  }

  checkUserTyper(user: User): void{
    this.userService.setUserProfile(user)
    if(user[0].admin){
      this.userType =  3;
    }else if(user[0].funcionario){
      this.userType = 2;
    }else{
      this.userType = 1;
    }
  }



}
