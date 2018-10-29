import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { User } from 'src/app/_models/user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginCheckService } from '../login-check.service';
import { LogStateService } from '../log-state.service';
import { isEmpty } from 'lodash';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  public userType: number = 2;
  public user: User[];
  public forgotPassword: boolean = true
  public notRegistred: boolean;
  @ViewChild('msgInvalid') msgInvalid: ElementRef;
  public form: FormGroup = new FormGroup({
    'user': new FormControl(null, [ Validators.required ]),
    'password': new FormControl(null, [Validators.required])
  });


  constructor(
    private route: Router,
    private renderer: Renderer2,
    private loginservice: LoginCheckService,
    private data: LogStateService,
    ) { }

    ngOnInit() {

    }

    enterUserArea(): void{
      if(this.form.invalid){
        this.addInvalidFormMsg()
      }else{
        this.removeInvaliFormMsg()
        let userForm = this.form.value.user;
        let passForm = this.form.value.password;

        this.loginservice.checkUser(userForm, passForm)
        .then((data: any) => {
          this.user = data;
          this.checkEmptyResponse(this.user);
          if(this.validateUserLogin(this.user[0].email, this.user[0].password)){
            this.loginservice.userIsAuth()
            this.route.navigate(['/area-do-usuario'])
            this.data.changeStateLogin(true)
          }
        })
        .catch((data: any) => {});
      }

    }

    validateUserLogin(name, password): boolean{
      return name === this.form.value.user &&  password === this.form.value.password
    }

    addInvalidFormMsg(): void{
      this.renderer.removeClass(this.msgInvalid.nativeElement, "panel__invalid-msg--hide");
    }

    removeInvaliFormMsg(): void{
      this.renderer.addClass(this.msgInvalid.nativeElement, "panel__invalid-msg--hide");
    }

    checkEmptyResponse(response): void{
      if(isEmpty(response)){
        this.showRegisterMsg()
      }
    }

    showRegisterMsg(): void{
      this.notRegistred = true
    }



  }
