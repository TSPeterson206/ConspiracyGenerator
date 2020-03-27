import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    AddAdverbFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
