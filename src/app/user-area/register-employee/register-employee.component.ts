import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from 'src/app/shared/employee.model';
import { mapValues } from 'lodash';
import { matchPasswordValidator } from '../../shared/password-match.validator';


@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.less']
})
export class RegisterEmployeeComponent implements OnInit {
  public employee: Employee;
  public isDifferent: boolean;
  public form: FormGroup;


  constructor() { }

  ngOnInit() {
    this.getFormData()
  }

  sendData(){

    if(this.form.status !== 'INVALID'){
      this.employee = this.form.value
      alert('funcionario cadastrado!')
      this.form.reset()
      //this.houseService.registerHouse(this.house)
      //.subscribe((response)=> console.log(response))
    }
  }

  getFormData(): void{
    this.form = new FormGroup({
      'nome': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      'sobrenome': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]),
      'telefone': new FormControl(null, [ Validators.required, Validators.pattern(/^[0-9]{11}$/)]),
      'email': new FormControl(null, [ Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      'senha': new FormControl(null,  [ Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)]),
      'confirmarSenha': new FormControl(null,  [ Validators.required, matchPasswordValidator('senha')])
    });
  }


}
