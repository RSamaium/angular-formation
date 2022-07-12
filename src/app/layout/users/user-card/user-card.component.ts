import { Component, Input } from "@angular/core";
import { User } from "src/app/core/interfaces/user";

@Component({
    selector: 'app-user-card',
    template: `
        <h3>{{ user.name }}</h3>
        <p>{{ user.email }}</p>
        <button>{{ 'REMOVE' | lang:'en' }}</button>
    `
})
export class UserCardComponent {
    @Input() user: User = {} as User
}