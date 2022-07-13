import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersComponent } from "./users.component";

@NgModule({
    declarations: [UsersComponent, UserCardComponent],
    imports: [CommonModule, SharedModule, FormsModule, RouterModule],
    exports: [UsersComponent]
})
export class UsersModule {}