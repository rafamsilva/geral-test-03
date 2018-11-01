import { UserService } from 'src/app/user.service';
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
  public newUser: User;
  public form: FormGroup;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.getFormData()
  }

  sendData(): void{
    this.newUser = this.form.value
    this.userService.registerUser(this.newUser, false).subscribe((data)=>{
      this.finishRegister()
    })
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

  public finishRegister(): void{
    this.form.reset();
    alert('cliente cadastrado')
  }

}
