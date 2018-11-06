import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from '../shared/user.model';
import { LogStateService } from '../log-state.service';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.less']
})
export class UserAreaComponent implements OnInit {
  public userType: number = 1;
  public user: User;

  constructor(
    public userService: UserService,
    public logService: LogStateService
    ) { }

  ngOnInit(): void{
    this.getUserData()
  }


  getUserData(): void{
    this.userService.getUser()
    .subscribe((user: any) => {
      this.checkUserTyper(user)
    })
  }

  checkUserTyper(user: any): void{
    this.user = user.usuarios[0]
    if(this.user.admin){
      this.userType =  3;
    }else if(this.user.funcionario){
      this.userType = 2;
    }else{
      this.userType = 1;
    }
  }

}
