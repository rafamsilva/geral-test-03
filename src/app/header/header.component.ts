import { Component, OnInit, OnChanges} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../shared/user.model';
import { LogStateService } from '../log-state.service';
import { LoginCheckService } from '../login-check.service';
import { UserService } from '../user.service';

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
      private userService: UserService
      ) { }

      ngOnInit() {
        this.changeState()
      }


      public logout(): void{
        this.isLogged = false
      }

      changeState(){
        this.log.atualState.subscribe(state => this.isLogged = state)
      }

      isloggedCheck(){
        if(this.loginService.getUserSession !== undefined){
          this.log.changeStateLogin(true)
        }
      }
    }
