import { Component, OnInit } from '@angular/core';
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
  public form: FormGroup = new FormGroup({
    'user': new FormControl(null, [ Validators.required ]),
    'password': new FormControl(null)
  });


  constructor(
    private route: Router,
    private loginservice: LoginCheckService,
    private data: LogStateService
  ) { }

  ngOnInit() {
    //this.data.atualState.subscribe(state => this.isLogged = state)
  }

  public enterUserArea(): void{

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

  public validateUserLogin(name, password): boolean{
    return name === this.form.value.user &&  password === this.form.value.password
  }

}
