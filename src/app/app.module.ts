import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './-helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './-directives/index';
import { AuthGuard } from './-guards/index';
import { AlertService, AuthenticationService, UserService } from './-services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { BmiCalculatorComponent} from './bmi-calculator/index';
import { NutritionixComponent } from './nutritionix/nutritionix.component';
import { NutritionixService } from './nutritionix/nutritionix.service';




@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
BmiCalculatorComponent,
  AppComponent,
    NutritionixComponent

    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        NutritionixService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    
    bootstrap: [AppComponent]
})

export class AppModule { }
