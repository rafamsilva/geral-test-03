import { Component, OnInit } from '@angular/core';
import { LoginCheckService } from './login-check.service';
import { LogStateService } from './log-state.service';
import { UserService } from './user.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'imobiliaria-project';
  public userIsSaveOnBrownser: boolean;

  constructor(
    private logService: LoginCheckService,
    private logStateService: LogStateService,
    private logCheckService: LoginCheckService,
    private userService: UserService
    ){

  }

  ngOnInit(){
    this.userIsSaveOnBrownser = this.logService.getUserSession()
    if(this.userIsSaveOnBrownser){
      this.userService.getUser(this.userService.getUserId()).subscribe(
        data => {
          this.userService.setUser(data.usuarios[0])
          this.userService.getUserName()
        }
      )
      this.logStateService.changeStateLogin(true)
      this.logCheckService.userIsAuth();
    }
  }

}
