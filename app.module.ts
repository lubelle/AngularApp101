import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { ProductsService } from './products.service';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PastTrainingComponent } from './training/past-training/past-training.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
   declarations: [
      AppComponent,
      ProductsComponent,
      ProductComponent,
      HomeComponent,
      SignupComponent,
      LoginComponent,
      TrainingComponent,
      CurrentTrainingComponent,
      NewTrainingComponent,
      PastTrainingComponent,
      WelcomeComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MaterialModule
   ],
   providers: [
       ProductsService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
