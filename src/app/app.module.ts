import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { NavbarModule } from './navbar/navbar.module'

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NavbarModule],
    bootstrap: [AppComponent]
})
export class AppModule {}