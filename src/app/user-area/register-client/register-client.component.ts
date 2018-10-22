import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.less']
})
export class RegisterClientComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    'name': new FormControl(null),
    'lastName': new FormControl(null),
    'phone': new FormControl(null),
    'postalCode': new FormControl(null),
    'email': new FormControl(null),
    'password': new FormControl(null)
  });

  constructor() { }

  ngOnInit() {
  }

}
