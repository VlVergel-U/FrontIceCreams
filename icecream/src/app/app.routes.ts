import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';

export const routes: Routes = [

    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent},
    { path: '**', component: NotfoundComponent }

];
