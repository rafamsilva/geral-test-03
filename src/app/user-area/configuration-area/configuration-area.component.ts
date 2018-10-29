import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ageRangeValidator } from 'src/app/_validators/old-password.validator';
import { matchPasswordValidator } from 'src/app/_validators/password-match.validator';

@Component({
  selector: 'app-configuration-area',
  templateUrl: './configuration-area.component.html',
  styleUrls: ['./configuration-area.component.less']
})
export class ConfigurationAreaComponent implements OnInit {
  public email: string = 'danillofidel@gmail.com'
  public form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.getFormData()
  }

  sendData(): void{
    console.log(this.form)
  }

  getFormData(): void{
    this.form = new FormGroup({
      'senheAnterior': new FormControl(null, [Validators.required, ageRangeValidator(10,20)]),
      'novaSenha': new FormControl(null, [Validators.required]),
      'confirmarNovaSenha': new FormControl(null, [Validators.required, matchPasswordValidator('senha')])
    });
  }
}
