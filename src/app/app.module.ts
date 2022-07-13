import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { appRouter } from './app.router'
import { LoginModule } from './login/login.module'
import { AppService } from './core/services/app.service'
import { HttpClientModule } from '@angular/common/http';
import { MytestComponent } from './mytest/mytest.component'

@NgModule({
    declarations: [AppComponent, MytestComponent],
    imports: [
        BrowserModule, 
        LoginModule, 
        appRouter,
        HttpClientModule
    ],
    bootstrap: [AppComponent],
    providers: [AppService]
})
export class AppModule {}