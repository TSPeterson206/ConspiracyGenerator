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
export class AdverbComponent implements OnInit {
  // adverb=['and it will happen again','and there are no regrets about it','and yet the people are cool with it',', which is so uncool','and it isn\'t the first time','and yet the world still turns','and that is how it goes','and you are next!','and also is a flat-eather','and is alive and well in Cuba','and has never paid federal income tax'];
  // tempAdverb='';

  @Input() adverb: Array<string>;
  @Input() tempAdverb: string;
  @Input() adverbFade:any;

constructor() { }

  ngOnInit() {
  }

  generateAdverb(){
    const rando = Math.round(Math.random()*10);
    this.tempAdverb=this.adverb[rando];
    console.log(rando)
  }

}
