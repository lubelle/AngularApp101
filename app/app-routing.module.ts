import { TrainingComponent } from './training/training.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ProductsComponent } from './products.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: 'training', component: TrainingComponent},
    {path: 'products', component: ProductsComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
