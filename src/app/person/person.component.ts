import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  animations:[
    trigger('fadeInPerson', [
    state('new',style({
      fontSize:'25px',
      color:'red',
      opacity:0.5
    })),
    state('old',style({
      fontSize:'12px',
      color:'black',
      opacity:1.0
    })),
    transition('new => old', [
      animate('1s')
    ]),
    transition('old=> new', [
      animate('1s')
    ]),
  ])
  ]
})
export class PersonComponent implements OnInit {
// newState=true;

// person=['Alex Jones','Hillary Clinton','Bill Clinton','The Illuminati','The federal government','Conor Mcgregor','Jeff Bezos','Donald Trump','The Magnificent Twelve','The FBI','Michael Jackson','R Kelly','Jay Inslee','Vincent D\'onofrio','Alexander Graham Bell','Our founding father','Captain James Tiberius Kirk'];
  @Input() person: string[];
  @Input() tempPerson: string[];
  @Input() personFade:any;
  
constructor() {}

  ngOnInit() {
  }

  generatePerson(){
    const rando = Math.round(Math.random()*10);
    this.tempPerson=[this.person[rando]];
    console.log(this.personFade)
  }

  
}