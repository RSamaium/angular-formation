import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { UsersComponent } from "./users/users.component";

const routes: Routes = [
    {
        path: '',
        component: UsersComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
]

export const appRouter = RouterModule.forRoot(routes)