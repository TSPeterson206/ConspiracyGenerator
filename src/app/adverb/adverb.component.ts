import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adverb',
  templateUrl: './adverb.component.html',
  styleUrls: ['./adverb.component.css']
})
export class AdverbComponent implements OnInit {
adverb=['and it will happen again','and there are no regrets about it','and yet the people are cool with it',', which is so uncool','and it isn\'t the first time','and yet the world still turns','and that is how it goes','and you are next!','and also is a flat-eather','and is alive and well in Cuba','and has never paid federal income tax'];
  tempAdverb='';
constructor() { }

  ngOnInit() {
  }

  generateAdverb(){
    const rando = Math.round(Math.random()*10);
    this.tempAdverb=this.adverb[rando];
    console.log(rando)
  }

}
