import { AbstractControl, ValidatorFn } from "@angular/forms";

export function domainValidator(domainName: string): ValidatorFn {
    return function(input: AbstractControl): { domain: string } | null {
        return input.value.endsWith(domainName) ? { domain: domainName } : null
    }
}