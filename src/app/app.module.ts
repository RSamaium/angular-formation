import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { appRouter } from './app.router'
import { LoginModule } from './login/login.module'
import { NavbarModule } from './navbar/navbar.module'
import { UsersModule } from './users/users.module'

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NavbarModule, UsersModule, LoginModule, appRouter],
    bootstrap: [AppComponent]
})
export class AppModule {}