import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/core/services/app.service";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title | uppercase }} - 
            {{ price | currency:'EUR':'code' }}</h1>
        <app-search [username]="name" (onSearch)="listenSearch($event)"></app-search>
        <button routerLink="/login">Connexion</button>
    `
})
export class NavbarComponent implements OnInit {
    title: string = ''
    name: string = 'ben'
    price: number = 15
    
    constructor(private appService: AppService) { }

    ngOnInit() {
        this.title = this.appService.getTitle()
    }

    listenSearch(username: string) {
        console.log(username)
    }
}