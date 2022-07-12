import { Component, EventEmitter, Input, Output } from "@angular/core";
import { User } from "src/app/core/interfaces/user";
import { UserService } from "src/app/core/services/user.service";

@Component({
    selector: 'app-user-card',
    template: `
        <h3>{{ user.name }}</h3>
        <p>{{ user.email }}</p>
        <button (click)="removeUser()">{{ 'REMOVE' | lang:'en' }}</button>
    `
})
export class UserCardComponent {
    @Input() user: User = {} as User
    @Output() onDelete: EventEmitter<number> = new EventEmitter()

    constructor(private userService: UserService) {}

    removeUser() {
        this.userService
            .delete(this.user.id)
            .subscribe(() => {
                this.onDelete.emit(this.user.id)
            })
    }
}