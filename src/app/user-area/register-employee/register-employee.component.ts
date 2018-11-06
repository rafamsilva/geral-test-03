import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/user.model';

import { matchPasswordValidator } from '../../shared/password-match.validator';
import { UserService } from 'src/app/user.service';
import { ErrorHandlerService } from 'src/app/error-handler.service';


@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.less']
})
export class RegisterEmployeeComponent implements OnInit {
  public isRegistered: boolean = true;
  public conectionError: boolean;
  public newUser: User;
  public isDifferent: boolean;
  public form: FormGroup;


  constructor(
    public userService: UserService,
    public errorService: ErrorHandlerService
    ) { }

  ngOnInit() {
    this.getFormData()
  }

  public sendData(): void{
    this.newUser = this.form.value
    this.userService.registerUser(this.newUser, true).subscribe(
      data => this.finishRegister(),
      error => this.errorService.error.subscribe(
        state => {
          this.conectionError = state
          this.isRegistered = state
        })
      )
  }

  public getFormData(): void{
    this.form = new FormGroup({
      'nome': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      'sobrenome': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]),
      'telefone': new FormControl(null, [ Validators.required, Validators.pattern(/^[0-9]{11}$/)]),
      'email': new FormControl(null, [ Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      'senha': new FormControl(null,  [ Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)]),
      'confirmarSenha': new FormControl(null,  [ Validators.required, matchPasswordValidator('senha')])
    });
  }

  public finishRegister(): void{
    this.form.reset();
  }


}
