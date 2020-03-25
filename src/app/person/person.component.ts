import { Component, Input, OnInit,AfterViewChecked,HostBinding } from '@angular/core';
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

export class PersonComponent implements OnInit{

  @Input() tempPerson: string;
  @Input() personFade:any;
  @Input() user:any;
  userNouns:any;
  
constructor(private http:HttpClient) {}

ngOnInit(){
}
  
}