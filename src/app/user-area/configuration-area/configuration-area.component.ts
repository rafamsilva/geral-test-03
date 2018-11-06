import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ageRangeValidator } from 'src/app/shared/old-password.validator';
import { matchPasswordValidator } from 'src/app/shared/password-match.validator';

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

  }

  getFormData(): void{
    this.form = new FormGroup({
      'senhaAtual': new FormControl(null, [Validators.required]),
      'novaSenha': new FormControl(null, [Validators.required]),
      'confirmarNovaSenha': new FormControl(null, [Validators.required, matchPasswordValidator('novaSenha')])
    });
  }
}
