import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

const dateValidator =
  (): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    try {
      new Date(control.value);
      return null;
    } catch {
      return { invalidDate: { value: control.value } };
    }
  };

@Directive({
  selector: '[tuDateValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DateValidatorDirective,
      multi: true,
    },
  ],
})
export class DateValidatorDirective implements Validator {
  validate = (control: AbstractControl): ValidationErrors | null =>
    dateValidator()(control);
}
