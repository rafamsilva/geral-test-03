import {
  Component,
  OnInit,
  ViewChild,
  Renderer2,
  ElementRef } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginCheckService } from '../login-check.service';
import { User } from '../../shared/user.model';

  @Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less'],
  })
  export class HeaderComponent implements OnInit {


    public userName: string = "Danillo";
    public isLogged: boolean = false;
    public userType: number = 2;
    public users: User[];
    public form: FormGroup = new FormGroup({
      'user': new FormControl(null, [ Validators.required ]),
      'password': new FormControl(null)
    });


    constructor(
      private route: Router,
      private render: Renderer2,
      private loginservice: LoginCheckService
      ) { }

      ngOnInit() {

      }



      public logout(): void{
        this.isLogged = false
      }

      public validateUserLogin(name, password): boolean{
        if( name === this.form.value.user &&  password === this.form.value.password){
            return true
        }
      }

    }
