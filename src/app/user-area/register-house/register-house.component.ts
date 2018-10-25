import { House } from 'src/shared/house.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HousesService } from '../../houses.service';

@Component({
  selector: 'app-register-house',
  templateUrl: './register-house.component.html',
  styleUrls: ['./register-house.component.less']
})
export class RegisterHouseComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(130)]),
    'bairro': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    'cidade': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(40)]),
    'estado': new FormControl(null, [Validators.required]),
    'cep': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{8}$/)]),
    'tipo': new FormControl(null, [Validators.required]),
    'disp': new FormControl(null, [Validators.required]),
    'suites': new FormControl(null, []),
    'quartos': new FormControl(null, []),
    'vagas': new FormControl(null, []),
    'area': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    'valor': new FormControl(null, [Validators.required]),
  })
  public house: House;

  constructor(private houseService: HousesService) { }

  ngOnInit() {
    console.log('on init',this.form)
  }

  sendData(){
    this.house = this.form.value
    console.log(this.form)
    //this.houseService.registerHouse(this.house)
    //.subscribe((response)=> console.log(response))
  }

}
