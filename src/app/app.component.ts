import { Component, OnInit } from '@angular/core';
import { LoginCheckService } from './login-check.service';
import { LogStateService } from './log-state.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'imobiliaria-project';
  public userLog: boolean;

  constructor(
    public logService: LoginCheckService,
    public logStateService: LogStateService,
    public logCheckService: LoginCheckService
    ){

  }

  ngOnInit(){
    this.userLog = this.logService.getUserSession()
    if(this.userLog){
      this.logStateService.changeStateLogin(true)
      this.logCheckService.userIsAuth();
    }
  }

}
