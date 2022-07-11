import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersComponent } from "./users.component";

@NgModule({
    declarations: [UsersComponent, UserCardComponent],
    imports: [CommonModule],
    exports: [UsersComponent]
})
export class UsersModule {}