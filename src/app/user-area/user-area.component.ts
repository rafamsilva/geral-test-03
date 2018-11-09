import { LoginCheckService } from './../login-check.service';
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
  public userType: number;
  public user: User;

  constructor(
    public userService: UserService,
    public logService: LogStateService,
    public login : LoginCheckService
    ) { }

  ngOnInit(): void{
    if(!this.checkUserStorage()){
      this.getUserData()
    }
  }


  getUserData(): void{
    this.userService.getUser(this.userService.getUserId())
    .subscribe(
      (user: any) => {
      this.checkUserTyper(user)
      this.setUserName(user)
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
    this.storageUsertype(this.userType)
  }

  setUserName(user: any){
    let name = user.usuarios[0].nome
    this.logService.setUserName(name)
  }

  storageUsertype(type){
    this.login.storageUserSession(type)
  }

  checkUserStorage(){
    if(!this.login.getUserType()){
      return false
    }else{
      this.userType = Number(this.login.getUserType())
      return true
    }
  }

}
