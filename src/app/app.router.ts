import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        loadChildren: () => import('./layout/layout.module').then(modules => modules.LayoutModule) 
    }
   /* {
        path: '**',
        component: NotFoundComponent
    }*/
]

export const appRouter = RouterModule.forRoot(routes)