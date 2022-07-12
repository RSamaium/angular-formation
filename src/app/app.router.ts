import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
]

export const appRouter = RouterModule.forRoot(routes)