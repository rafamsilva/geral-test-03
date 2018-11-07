import { Component, OnInit, OnChanges} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../shared/user.model';
import { LogStateService } from '../log-state.service';
import { LoginCheckService } from '../login-check.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

  @Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less'],
  })
  export class HeaderComponent implements OnInit {

    public userName: string;
    public isLogged: boolean;
    public users: User[];

    constructor(
      private log: LogStateService,
      private loginService: LoginCheckService,
      private userService: UserService,
      private route: Router
      ) { }

      ngOnInit() {
        this.changeState()
        this.getUserName()
      }


      public logout(): void{
        this.route.navigate(["./"]);
        this.isLogged = false
        this.log.changeStateLogin(false)
        this.loginService.removeUseSession()
      }

      changeState(){
        this.log.atualState.subscribe(
          state => {
            this.isLogged = state
          })
      }

      getUserName(){
        this.log.actualName.subscribe(name => this.userName = name)
      }


    }
