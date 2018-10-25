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
    'endereco': new FormControl(null, [Validators.required]),
    'bairro': new FormControl(null, [Validators.required]),
    'cidade': new FormControl(null, [Validators.required]),
    'estado': new FormControl(null, [Validators.required]),
    'cep': new FormControl(null, [Validators.required]),
    'tipo': new FormControl(null, [Validators.required]),
    'disp': new FormControl(null, [Validators.required]),
    'suites': new FormControl(null, [Validators.required]),
    'quartos': new FormControl(null, [Validators.required]),
    'vagas': new FormControl(null, [Validators.required]),
    'area': new FormControl(null, [Validators.required]),
    'valor': new FormControl(null, [Validators.required]),
  })
  public house: House;

  constructor(private houseService: HousesService) { }

  ngOnInit() {
    console.log(this.form.value)
  }

  sendData(){
    this.house = this.form.value
    this.houseService.registerHouse(this.house)
    .subscribe((response)=> console.log(response))
  }

}
