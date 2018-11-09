import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ageRangeValidator } from 'src/app/shared/old-password.validator';
import { matchPasswordValidator } from 'src/app/shared/password-match.validator';
import { UserService } from 'src/app/user.service';
import { LoginCheckService } from '../../login-check.service';
import { LogStateService } from '../../log-state.service';

@Component({
  selector: 'app-configuration-area',
  templateUrl: './configuration-area.component.html',
  styleUrls: ['./configuration-area.component.less']
})
export class ConfigurationAreaComponent implements OnInit {
  public email: string = 'danillofidel@gmail.com'
  public form: FormGroup;
  public changeSuccess: boolean;

  constructor(
    private userService: UserService,
    private loginservice: LoginCheckService,
    private loginStateService: LogStateService
    ) { }

  ngOnInit() {
    this.getFormData()
  }

  sendData(): void{
    if (!this.form.invalid) {
      let passForm = this.form.value.senhaAtual;
      let userEmail = this.getEmailData()
      let newPass = this.form.value.novaSenha
      this.loginservice.tryLogin(userEmail, passForm).subscribe(
        data => {
          if(data.success){
            this.effectChangePassword(this.getUserId(), newPass)
          }
        }
        //error => this.errorService.error.subscribe(state => this.conectionError = state)
        );
    }
  }

  getFormData(): void{
    this.form = new FormGroup({
      'senhaAtual': new FormControl(null, [Validators.required]),
      'novaSenha': new FormControl(null, [Validators.required]),
      'confirmarNovaSenha': new FormControl(null, [Validators.required, matchPasswordValidator('novaSenha')])
    });
  }

  getEmailData(){
    return this.userService.getUserEmail()
  }

  effectChangePassword(id, newPass){
    this.userService.updateUserPass(id, newPass).subscribe(
      data => this.finishRegister()
    )
  }

  getUserId(){
     return this.userService.getUserId()
  }

  public finishRegister(): void{
    this.form.reset();
    this.loginStateService.setRegisterMsg(true)
    this.loginStateService.isRegistred.subscribe(state => this.changeSuccess = state)
  }
}
