import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { NavbarComponent } from "./navbar.component";
import { SearchComponent } from "./search/search.component";

@NgModule({
    declarations: [NavbarComponent, SearchComponent],
    imports: [FormsModule, CommonModule, SharedModule, RouterModule],
    exports: [NavbarComponent]
})
export class NavbarModule {}