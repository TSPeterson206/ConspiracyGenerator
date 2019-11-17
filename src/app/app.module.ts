import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { ActionComponent } from './action/action.component';
import { AdverbComponent } from './adverb/adverb.component';
import { HeaderComponent } from './header/header.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    ActionComponent,
    AdverbComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
