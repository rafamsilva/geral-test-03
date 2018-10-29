import { AbstractControl, ValidatorFn } from '@angular/forms';


function matchPasswordValidator(pwd: string): ValidatorFn {
  console.log('senha recebida', pwd);

  return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value !== undefined && control.value !== pwd) {
          return { 'match': true };
      }
      return null;
  };
}

export { matchPasswordValidator }


