import { UpperCasePipe } from "@angular/common";
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
UpperCasePipe

export function firstLetterShouldBeUppercase(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = <string>control.value;

        if(!value) return null;
        if(value.length === 0) return null;
        const firstLetter = value[0];

        if (firstLetter !== firstLetter.toUpperCase()) {
            return {
                firstLetterShouldBeUppercase: {
                    message: 'The first letter should be uppercass'
                }
            };

        }

        return null;
    }
}


export function dateCannotBeInTheFuture(): ValidatorFn {
    return(control: AbstractControl): ValidationErrors | null => {
        const date = new Date(control.value);
        const today = new Date();

        if(date > today) {
            return {
                dataCannotBeInTheFuture: {
                    message: 'The date cannot be in the future'
                }
            }
        }
        return null;
    }
}