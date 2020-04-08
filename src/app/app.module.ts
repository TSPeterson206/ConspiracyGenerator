import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule, FormControlDirective, FormGroupDirective } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
// import { routing } from './app.routing';

import { ModalModule } from './_modal';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { ActionComponent } from './action/action.component';
import { AdverbComponent } from './adverb/adverb.component';
import { HeaderComponent } from './header/header.component';
import { AddPersonFormComponent } from './add-person-form/add-person-form.component';
import { AddVerbFormComponent } from './add-verb-form/add-verb-form.component';
import { AddAdverbFormComponent } from './add-adverb-form/add-adverb-form.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main-component/main-component.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthService } from './auth.service';

const routes: Routes = [
  { path: '', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'home', component: MainComponent },

];



@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    ActionComponent,
    AdverbComponent,
    HeaderComponent,
    AddPersonFormComponent,
    AddVerbFormComponent,
    AddAdverbFormComponent,
    LoginComponent,
    MainComponent,
    SignupComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    // routing,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  exports: [RouterModule],
  providers: [FormControlDirective, FormGroupDirective, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
