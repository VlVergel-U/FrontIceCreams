import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { protectionGuard } from './guards/protection.guard';

export const routes: Routes = [

    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'home', component: HomeComponent, canActivate: [protectionGuard]},
    { path: '**', component: NotfoundComponent }

];
