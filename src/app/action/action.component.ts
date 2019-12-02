import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css'],
  animations:[
    trigger('fadeInAction', [
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
export class ActionComponent implements OnInit {
  // action=['put flouride in our drinking water in order to control out minds','was responsible for  9/11','is the orchestrator of pizzagate','embezzles from the Boeing pension fund','can control the weather','has the key to entering the matrix','is actually the tooth fairy','invented the phrase "YOLO"','invented the internet','sells organs on the black market','is the real Dread Pirate Roberts','never learned to read','knows that Nicholas Cage actually did steal the declaration of independence','successfully cloned a congressman','is actually over 600 years old','plays poker with the devil','has danced with the devil in the pale moonlight','ghost wrote all of Shakespeare\'s plays','is actually a clone','has kept a tight lid on hydro-fusion','funds dark-web red rooms','is actually one of a set of triplets'];
  // tempAction='';

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
