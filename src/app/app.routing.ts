import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './-guards/index';
import {BmiCalculatorComponent} from './bmi-calculator/index';





const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
     { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'BMI' , component:BmiCalculatorComponent},
        
    
    
    
    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
