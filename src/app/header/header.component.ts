import {
  Component,
  OnInit,
  ViewChild,
  Renderer2,
  ElementRef } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginCheckService } from '../login-check.service';
import { User } from '../shared/user.model';

  @Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less'],
  })
  export class HeaderComponent implements OnInit {

    @ViewChild('btnClear') btnClear: ElementRef;
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

      public enterUserArea(): void{
        console.log('user area' , this.form)
        this.loginservice.getUsers()
        .then((data: User[]) => {
          this.users = data;
        })
        .catch((data: any) => {});

        console.log(this.users)

        if(this.form.value.user == 'a'){
          this.route.navigate(['/area-do-usuario'])
          this.render.setAttribute(this.btnClear.nativeElement,'data-dismiss','modal')
          this.isLogged = true
        }else{
          console.log('erro')
        }



      }

      public logout(): void{
        this.isLogged = false
        console.log(this.form)
      }

    }
