import { Component } from "@angular/core";

@Component({
    selector: 'app-search',
    template: `
        <input type="text" [value]="username">
        <button>Rechercher</button>
    `
})
export class SearchComponent {
    username: string = 'ana'
}