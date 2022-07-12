import { Component } from '@angular/core'
import { bufferTime, map } from 'rxjs';
import { ClickService } from './core/services/click.service';

@Component({
    selector: 'app-root',
    template: `
        <router-outlet></router-outlet>
    `
})
export class AppComponent { 
    constructor(clickService: ClickService) {
        clickService
            .simulate()
            .pipe(
                bufferTime(500),
                map(el => el.length)
            )
            .subscribe({
                next(letter: any) {
                    console.log(letter)
                },
                error(err) {
                    console.log(err)
                }
            })
    }
}