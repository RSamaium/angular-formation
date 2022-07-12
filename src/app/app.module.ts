import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { appRouter } from './app.router'
import { LoginModule } from './login/login.module'
import { LayoutModule } from './layout/layout.module'
import { AppService } from './core/services/app.service'

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, LayoutModule, LoginModule, appRouter],
    bootstrap: [AppComponent],
    providers: [AppService]
})
export class AppModule {}