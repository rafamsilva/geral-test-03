import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.less']
})
export class RegisterEmployeeComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    'name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    'lastName': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]),
    'phone': new FormControl(null, [ Validators.required, Validators.pattern(/^[0-9]{11}$/)]),
    'email': new FormControl(null, [ Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    'password': new FormControl(null,  [ Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)]),
    'password-confirm': new FormControl(null,  [ Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)])
  });



  constructor() { }

  ngOnInit() {
    console.log(this.form)
  }

  sendData(): void{
    console.log(this.form)
  }

}
