import { Component, OnInit } from '@angular/core';
import { User } from 'src/shared/user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginCheckService } from '../login-check.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

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

    if(this.validateUserLogin(this.users[0].email, this.users[0].pass)){
      this.route.navigate(['/area-do-usuario'])
      this.isLogged = true
    }else{
      console.log('erro');
    }

  }

  public validateUserLogin(name, password): boolean{
    if( name === this.form.value.user &&  password === this.form.value.password){
        return true
    }
  }

}
