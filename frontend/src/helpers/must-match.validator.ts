import { UntypedFormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function MusMatch(controlName: string, matchingControlName: string) {
  return (formGroup: UntypedFormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors['musMatch']) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ musMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
