import { NgModule } from "@angular/core";
import { AutocompletePipe } from "./pipes/autocomplete.pipe";
import { LangPipe } from "./pipes/lang.pipe";
import { PluralPipe } from "./pipes/plural.pipe";

@NgModule({
    declarations: [PluralPipe, LangPipe, AutocompletePipe],
    imports: [],
    exports: [PluralPipe, LangPipe, AutocompletePipe]
})
export class SharedModule {}