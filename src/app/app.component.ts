import { Component, OnInit } from '@angular/core';
import { LoginCheckService } from './login-check.service';
import { LogStateService } from './log-state.service';
import { UserService } from './user.service';
import * as _ from 'lodash';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'imobiliaria-project';
  public userIsSaveOnBrownser: boolean;

  constructor(
    private logStateService: LogStateService,
    private logCheckService: LoginCheckService,
    private userService: UserService
    ){

  }

  ngOnInit(){
    this.userIsSaveOnBrownser = this.logCheckService.getUserSession()
    if(this.userIsSaveOnBrownser){
      this.userService.getUser(this.userService.getUserId()).subscribe(
        data => {
          if(data.success){
          this.userService.setUser(data.usuarios[0])
          this.userService.getUserName()
          }else{
            this.logCheckService.userLogout()
          }
        }
      )
      this.logStateService.changeStateLogin(true)
      this.logCheckService.userIsAuth();
    }
  }

}
