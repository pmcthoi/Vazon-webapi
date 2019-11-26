import { Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const mainRoutes: Routes = [
    {
         //localhost:4200/main/user
        path: '', component: MainComponent, children: [
             //localhost:4200/main/user/index
            { path: '', redirectTo: 'home', pathMatch: 'full' },
             //localhost:4200/main/user
            { path: 'user', loadChildren: './user/user.module#UserModule' }
        ]
    }

]