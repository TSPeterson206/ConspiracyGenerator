import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

const colors = ['yellow','green','blue','orange','black','red','purple','lightblue','lightgreen'];

@Component({
  selector: 'app-adverb',
  templateUrl: './adverb.component.html',
  styleUrls: ['./adverb.component.css'],
  animations:[
    trigger('fadeInAdverb', [
    state('new',style({
      fontSize:'21px',
      color:colors[Math.floor(Math.random()*colors.length)],
      opacity:0.8,
      textAlign:'center'
    })),
    state('old',style({
      fontSize:'32px',
      color:colors[Math.floor(Math.random()*colors.length)],
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
export class AdverbComponent implements OnInit {

  // @Input() adverb: Array<string>;
  @Input() tempAdverb: string;
  @Input() adverbFade:any;

constructor() { }

  ngOnInit() {
  }

  generateAdverb(){
    const rando = Math.round(Math.random()*10);
    // this.tempAdverb=this.adverb[rando];
    console.log(rando)
  }

}
