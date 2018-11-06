import { House } from 'src/app/shared/house.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HousesService } from '../../houses.service';

@Component({
  selector: 'app-register-house',
  templateUrl: './register-house.component.html',
  styleUrls: ['./register-house.component.less']
})
export class RegisterHouseComponent implements OnInit {
  public form: FormGroup;
  public house: House;

  constructor(private houseService: HousesService) { }

  ngOnInit() {
    this.getFormData()
  }

  sendData(){
    if(this.form.status !== 'INVALID'){
      this.house = this.form.value
      this.houseService.registerHouse(this.house);
      this.form.reset()
    }
  }

  getFormData(): void{
    this.form = new FormGroup({
      'endereco': new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(130)]),
      'bairro': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      'cidade': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(40)]),
      'estado': new FormControl(null, [Validators.required]),
      'cep': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{8}$/)]),
      'tipo': new FormControl(null, [Validators.required]),
      'disp': new FormControl(null, [Validators.required]),
      'suites': new FormControl(null, [Validators.pattern(/^[0-9]*$/),Validators.maxLength(10)]),
      'quartos': new FormControl(null, [Validators.pattern(/^[0-9]*$/),Validators.maxLength(10)]),
      'vagas': new FormControl(null, [Validators.pattern(/^[0-9]*$/), Validators.maxLength(10)]),
      'area': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.minLength(3), Validators.maxLength(20)]),
      'valor': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[0-9]*$/)]),
    })
  }

}
