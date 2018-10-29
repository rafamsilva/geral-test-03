import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../_models/user.model';
import { LogStateService } from '../log-state.service';

  @Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less'],
  })
  export class HeaderComponent implements OnInit {

    public userName: string = "Danillo";
    public isLogged: boolean;
    public userType: number = 2;
    public users: User[];
    public form: FormGroup = new FormGroup({
      'user': new FormControl(null, [ Validators.required ]),
      'password': new FormControl(null)
    });


    constructor(
      private log: LogStateService
      ) { }

      ngOnInit() {
        this.log.atualState.subscribe(state => this.isLogged = state)

      }

      public logout(): void{
        this.isLogged = false
      }

    }
