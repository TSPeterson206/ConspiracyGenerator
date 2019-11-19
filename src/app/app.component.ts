import {
  Component
} from '@angular/core';
import {} from './person/person.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conspiracyGenerator';

  person = ['Alex Jones', 'Hillary Clinton', 'Bill Clinton', 'The Illuminati', 'The federal government', 'Conor Mcgregor', 'Jeff Bezos', 'Donald Trump', 'The Magnificent Twelve', 'The FBI', 'Michael Jackson', 'R Kelly', 'Jay Inslee', 'Vincent D\'onofrio', 'Alexander Graham Bell', 'Our founding father', 'Captain James Tiberius Kirk'];
  tempPerson = [];
  action = ['put flouride in our drinking water in order to control out minds', 'was responsible for  9/11', 'is the orchestrator of pizzagate', 'embezzles from the Boeing pension fund', 'can control the weather', 'has the key to entering the matrix', 'is actually the tooth fairy', 'invented the phrase "YOLO"', 'invented the internet', 'sells organs on the black market', 'is the real Dread Pirate Roberts', 'never learned to read', 'knows that Nicholas Cage actually did steal the declaration of independence', 'successfully cloned a congressman', 'is actually over 600 years old', 'plays poker with the devil', 'has danced with the devil in the pale moonlight', 'ghost wrote all of Shakespeare\'s plays', 'is actually a clone', 'has kept a tight lid on hydro-fusion', 'funds dark-web red rooms', 'is actually one of a set of triplets'];
  tempAction = [];
  adverb = ['and it will happen again', 'and there are no regrets about it', 'and yet the people are cool with it', ', which is so uncool', 'and it isn\'t the first time', 'and yet the world still turns', 'and that is how it goes', 'and you are next!', 'and also is a flat-eather', 'and is alive and well in Cuba', 'and has never paid federal income tax'];
  tempAdverb = [];

  generateTheory() {
    const rando1 = Math.round(Math.random() * 17);
    this.tempPerson = [this.person[rando1]];
    const rando2 = Math.round(Math.random() * 17);
    this.tempAction = [this.action[rando2]];
    const rando3 = Math.round(Math.random() * 17);
    this.tempAdverb = [this.adverb[rando3]];
    console.log('generatingTheory', rando1,rando2,rando3)
  }
}
