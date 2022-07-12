import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { NavbarComponent } from "./navbar.component";
import { SearchComponent } from "./search/search.component";

@NgModule({
    declarations: [NavbarComponent, SearchComponent],
    imports: [FormsModule, CommonModule, SharedModule],
    exports: [NavbarComponent]
})
export class NavbarModule {}