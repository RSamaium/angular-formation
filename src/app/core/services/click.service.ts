import { Observable } from 'rxjs'
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ClickService {
    simulate() {
        return new Observable(observer => {
            console.log('go')
            setTimeout(() => {
                observer.next('A')
            }, 100)
            setTimeout(() => {
                observer.next('B')
            }, 200)
            setTimeout(() => {
                observer.next('C')
            }, 300)
            setTimeout(() => {
                observer.next('D')
                observer.complete()
            }, 3000)
        })
    }
}