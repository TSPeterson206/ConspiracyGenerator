import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule, FormControlDirective, FormGroupDirective } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';



import { ModalModule } from './_modal';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { ActionComponent } from './action/action.component';
import { AdverbComponent } from './adverb/adverb.component';
import { HeaderComponent } from './header/header.component';
import { AddPersonFormComponent } from './add-person-form/add-person-form.component';
import { AddVerbFormComponent } from './add-verb-form/add-verb-form.component';
import { AddAdverbFormComponent } from './add-adverb-form/add-adverb-form.component';



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
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule,
    RouterModule,
    NgbModule.forRoot()
  ],
  providers: [FormControlDirective, FormGroupDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
