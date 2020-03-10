import { Component, Input, AfterViewChecked,HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { getCurrencySymbol } from '@angular/common';

const colors = ['yellow','green','blue','orange','black','red','purple','lightblue','lightgreen'];

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  animations:[
    trigger('fadeInPerson', [
    state('new',style({
      fontSize:'21px',
      color:colors[Math.floor(Math.random()*10)],
      opacity:0.8,
      textAlign:'center'
    })),
    state('old',style({
      fontSize:'32px',
      color:colors[Math.floor(Math.random()*10)],
      opacity:1.0,
      textAlign:'center'
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

export class PersonComponent implements AfterViewChecked{// newState=true;

// person=['Alex Jones','Hillary Clinton','Bill Clinton','The Illuminati','The federal government','Conor Mcgregor','Jeff Bezos','Donald Trump','The Magnificent Twelve','The FBI','Michael Jackson','R Kelly','Jay Inslee','Vincent D\'onofrio','Alexander Graham Bell','Our founding father','Captain James Tiberius Kirk'];
  @Input() person: string[];
  @Input() tempPerson: string[];
  @Input() personFade:any;
  @Input() user:any;
  userNouns:any;
  
constructor(private http:HttpClient) {}

ngOnInit(){
}

ngAfterViewChecked(){
}
  // generatePerson(){
  //   const rando = Math.round(Math.random()*10);
  //   this.tempPerson=[this.person[rando]];
  //   console.log(this.personFade)
  // }

  
}