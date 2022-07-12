import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'autocomplete'
})
export class AutocompletePipe implements PipeTransform  {
    transform(names: string[], str: string): string[] {
        return names.filter(name => name.startsWith(str))
    }
}