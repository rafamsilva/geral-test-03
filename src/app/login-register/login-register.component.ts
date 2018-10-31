import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { matchPasswordValidator } from '../shared/password-match.validator';
import { User } from '../shared/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.less']
})
export class LoginRegisterComponent implements OnInit {
  formChecked: FormGroup;
  form: FormGroup;
  newUser: User
  @ViewChild('confirmPwd') confirmPwd: ElementRef;

  constructor(
    public userService: UserService,
    public renderer: Renderer2,
    public route: Router
    )
   { }

  ngOnInit() {
    this.getFormData()
  }

  getFormData(): void {
    this.form = new FormGroup({
      'nome': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      'sobrenome': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]),
      'telefone': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{11}$/)]),
      'email': new FormControl(null, [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      'senha': new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)]),
      'confirmarSenha': new FormControl(null,  [ Validators.required, matchPasswordValidator('senha')])
    });
  }

  sendData(): void{
    this.newUser = this.form.value
    this.userService.registerUser(this.newUser, false).subscribe((data)=>{
      this.checkRegister(data),
      //tratar erro
      (error)=>{ console.log('here', error)}
    })
  }

  checkRegister(status): void{
    if(status){
      //colocar um aviso de usuario cadastrado com sucesso
      this.route.navigate(["/area-do-usuario"]);
    }else{
      alert('nao cadastrado')
    }
  }


}
