import { NgModule } from "@angular/core";
import { ConfirmDirective } from "./directives/confirm.directive";
import { AutocompletePipe } from "./pipes/autocomplete.pipe";
import { ExtensionPipe } from "./pipes/extension.pipe";
import { LangPipe } from "./pipes/lang.pipe";
import { PluralPipe } from "./pipes/plural.pipe";

const declarations = [PluralPipe, LangPipe, AutocompletePipe, ExtensionPipe, ConfirmDirective]

@NgModule({
    declarations,
    imports: [],
    exports: declarations
})
export class SharedModule {}