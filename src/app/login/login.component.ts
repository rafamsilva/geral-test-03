import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { User } from 'src/shared/user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginCheckService } from '../login-check.service';
import { LogStateService } from '../log-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public userType: number = 2;
  public user: User;
  @ViewChild('msgInvalid') msgInvalid: ElementRef
  public form: FormGroup = new FormGroup({
    'user': new FormControl(null, [ Validators.required ]),
    'password': new FormControl(null, [Validators.required])
  });


  constructor(
    private route: Router,
    private renderer: Renderer2,
    private loginservice: LoginCheckService,
    private data: LogStateService
  ) { }

  ngOnInit() {
    //this.data.atualState.subscribe(state => this.isLogged = state)
  }

  enterUserArea(): void{

    console.log('formulario de login enviado', this.form)

    if(this.validateInputFields()){
      this.addInvalidFormMsg()
    }else{
      this.removeInvaliFormMsg()
    }

    let userForm = this.form.value.user;
    let passForm = this.form.value.password;

    this.loginservice.checkUser(userForm, passForm)
    .then((data: any) => {
      this.user = data;
      console.log(this.user)
    })
    .catch((data: any) => {});

    if(this.validateUserLogin(this.user[0].email, this.user[0].pass)){
      this.route.navigate(['/area-do-usuario'])
      this.data.changeStateLogin(true)
    }else{
      console.log('erro');
    }

  }

  validateUserLogin(name, password): boolean{
    return name === this.form.value.user &&  password === this.form.value.password
  }

  validateInputFields(): boolean{
    return this.form.status === 'INVALID'
  }

  addInvalidFormMsg(): void{
    alert('invalido')
    this.renderer.removeClass(this.msgInvalid.nativeElement, "panel__invalid-msg--hide");
  }

  removeInvaliFormMsg(): void{
    alert('valido')
    this.renderer.addClass(this.msgInvalid.nativeElement, "panel__invalid-msg--hide");
  }



}
