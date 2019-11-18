import { Component } from '@angular/core';
import { } from './person/person.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conspiracyGenerator';

  person=['Alex Jones','Hillary Clinton','Bill Clinton','The Illuminati','The federal government','Conor Mcgregor','Jeff Bezos','Donald Trump','The Magnificent Twelve','The FBI','Michael Jackson','R Kelly','Jay Inslee','Vincent D\'onofrio','Alexander Graham Bell','Our founding father','Captain James Tiberius Kirk'];
  tempPerson=[];
  
  generateTheory(){
    const rando = Math.round(Math.random()*10);
    this.tempPerson=[this.person[rando]];
    console.log(rando,'appcomponent', [this.person[rando]]);
  }
}
