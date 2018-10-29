import { matchPasswordValidator } from '../../shared/password-match.validator';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.less']
})
export class RegisterClientComponent implements OnInit {
  public user: User;
  public form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.getFormData()
  }

  sendData(){
    if(this.form.status !== 'INVALID'){
      this.user = this.form.value
      alert('funcionario cadastrado!')
      this.form.reset()
    //this.houseService.registerHouse(this.house)
    //.subscribe((response)=> console.log(response))
    }
  }


  getFormData(): void{
    this.form  = new FormGroup({
      'nome': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      'sobrenome': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]),
      'telefone': new FormControl(null, [ Validators.required, Validators.pattern(/^[0-9]{11}$/)]),
      'email': new FormControl(null, [ Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      'senha': new FormControl(null,  [ Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)]),
      'confirmarSenha': new FormControl(null,  [ Validators.required, matchPasswordValidator('senha')])
    });
  }

}
