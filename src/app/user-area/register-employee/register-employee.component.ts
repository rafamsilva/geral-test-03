import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.less']
})
export class RegisterEmployeeComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    'name': new FormControl(null),
    'lastName': new FormControl(null),
    'phone': new FormControl(null),
    'email': new FormControl(null),
    'password': new FormControl(null)
  });

  constructor() { }

  ngOnInit() {
  }

}
