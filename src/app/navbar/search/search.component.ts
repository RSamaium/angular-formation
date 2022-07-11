import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-search',
    template: `
        <input type="text" [(ngModel)]="username">
        <button (click)="search()" *ngIf="username">Rechercher</button>
        <ul>
            <li *ngFor="let name of firstnames">
                {{ name }}
            </li>
        </ul>
    `
})
export class SearchComponent {
    @Input() username: string = ''
    @Output() onSearch: EventEmitter<string> = new EventEmitter()
    firstnames: string[] = ['ana', 'ben', 'jim']

    search() {
        this.onSearch.emit(this.username)
    }
}

// MVVM : Model View View-Model
// double data binding, two way data binding