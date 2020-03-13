import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

const colors = ['yellow','green','blue','orange','black','red','purple','lightblue','lightgreen'];

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css'],
  animations:[
    trigger('fadeInAction', [
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
export class ActionComponent implements OnInit {

  @Input() action: Array<string>;
  @Input() tempAction: string;
  @Input() actionFade:any;

constructor() { }

  ngOnInit() {
  }

  generateAction(){
    const rando = Math.round(Math.random()*10);
    this.tempAction=this.action[rando];
    console.log(rando)
  }

}
