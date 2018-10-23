import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-configuration-area',
  templateUrl: './configuration-area.component.html',
  styleUrls: ['./configuration-area.component.less']
})
export class ConfigurationAreaComponent implements OnInit {
  public email: string = 'danillofidel@gmail.com'
  public form: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'oldPassword': new FormControl(null),
    'newPassword': new FormControl(null),
    'confirmNewPassword': new FormControl(null)
  });

  constructor() { }

  ngOnInit() {
  }

}
