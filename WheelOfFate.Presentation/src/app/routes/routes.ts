import { LayoutComponent } from '../layout/layout.component';
import { AuthService } from '../services/auth/auth.service';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { Error404Component } from './pages/error404/error404.component';

export const routes = [

    {
        path: '', canActivate: [AuthService],
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'material', loadChildren: './material/material.module#MaterialModule' },
        ]
    },
    
    { path: 'login', component: LoginComponent },
    // { path: 'register', component: RegisterComponent },
    { path: '404', component: Error404Component },

    // Not found
    { path: '**', redirectTo: '404' }

];
