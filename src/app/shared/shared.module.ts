import { NgModule } from "@angular/core";
import { AutocompletePipe } from "./pipes/autocomplete.pipe";
import { ExtensionPipe } from "./pipes/extension.pipe";
import { LangPipe } from "./pipes/lang.pipe";
import { PluralPipe } from "./pipes/plural.pipe";

@NgModule({
    declarations: [PluralPipe, LangPipe, AutocompletePipe, ExtensionPipe],
    imports: [],
    exports: [PluralPipe, LangPipe, AutocompletePipe, ExtensionPipe]
})
export class SharedModule {}