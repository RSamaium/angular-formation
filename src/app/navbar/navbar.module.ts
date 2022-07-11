import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar.component";
import { SearchComponent } from "./search/search.component";

@NgModule({
    declarations: [NavbarComponent, SearchComponent],
    imports: [],
    exports: [NavbarComponent]
})
export class NavbarModule {}