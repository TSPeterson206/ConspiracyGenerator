import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-adverb',
  templateUrl: './adverb.component.html',
  styleUrls: ['./adverb.component.css'],
  animations:[
    trigger('fadeInAdverb', [
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
