import {
  Component,
  OnInit,
  AfterViewChecked
} from '@angular/core';
import {} from './person/person.component'
import {
  HttpClient
} from '@angular/common/http';
import {
  tap,
  concatMap
} from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked {

  constructor(private http: HttpClient) {}

  title = 'conspiracyGenerator';
  personFade = true;
  adverbFade = true;
  actionFade = true;
  user: any;
  //contents:any;

  nouns: any;
  actions: any;
  descriptors: any;

  userNounsHolder: any;
  userVerbsHolder: any;
  userDescriptorsHolder: any;

  stockNouns: any;
  stockVerbs: any;
  stockDescriptors: any;

  stockNounsHolder:any;
  stockVerbsHolder:any;
  stockDescriptorsHolder:any;

  tempPerson: string;
  tempAction: string;
  tempAdverb: string;

  onlyUserNouns:any;
  onlyUserVerbs:any;
  onlyuserDescriptors:any;

  onlyUserNounsHolder:any;
  onlyUserVerbsHolder:any;
  onlyUserDescriptorsHolder:any;

  ngOnInit() {
    //GET USER
    this.http.get('http://localhost:8000/users/1').pipe(
      tap(result => this.user = result),
      // GET USER NOUNS
      concatMap(user => this.http.get(`http://localhost:8000/nouns/${this.user[0].id}`)),
      tap(result => this.userNounsHolder = result),
      // GET USER VERBS
      concatMap(verb => this.http.get(`http://localhost:8000/verbs/${this.user[0].id}`)),
      tap(result => this.userVerbsHolder = result),
      // GET USER DESCRIPTORS
      concatMap(descriptor => this.http.get(`http://localhost:8000/descriptors/${this.user[0].id}`)),
      tap(result => this.userDescriptorsHolder = result),

      // GET STOCK NOUNS
      concatMap(user => this.http.get(`http://localhost:8000/nouns/1`)),
      tap(result => this.stockNounsHolder = result),
      // GET STOCK VERBS
      concatMap(verb => this.http.get(`http://localhost:8000/verbs/1`)),
      tap(result => this.stockVerbsHolder = result),
      // GET STOCK DESCRIPTORS
      concatMap(descriptor => this.http.get(`http://localhost:8000/descriptors/1`)),
      tap(result => this.stockDescriptorsHolder = result),

      // GET ONLY USER NOUNS
      concatMap(descriptor => this.http.get(`http://localhost:8000/nouns/1/users`)),
      tap(result => this.onlyUserNounsHolder = result),
      // GET ONLY USER VERBS
      concatMap(descriptor => this.http.get(`http://localhost:8000/verbs/1/users`)),
      tap(result => this.onlyUserVerbsHolder = result),
      // GET ONLY USER DESCRIPTORS
      concatMap(descriptor => this.http.get(`http://localhost:8000/descriptors/1/users`)),
      tap(result => this.onlyUserDescriptorsHolder = result),


    ).subscribe(() => {
      // USER NOUNS,ACTIONS AND DESCRIPTORS
      this.nouns = this.userNounsHolder.map(noun => noun.content);
      this.actions = this.userVerbsHolder.map(verb => verb.content);
      this.descriptors = this.userDescriptorsHolder.map(descriptor => descriptor.content);
      //STOCK NOUNS,ACTIONS AND DESCRIPTORS
      this.stockNouns = this.stockNounsHolder.map(noun => noun.content);
      this.stockVerbs = this.stockVerbsHolder.map(noun => noun.content);
      this.stockDescriptors = this.stockDescriptorsHolder.map(noun => noun.content);
      //ONLY USERS NOUNS,ACTIONS AND DESCRIPTORS
      this.onlyUserNouns = this.onlyUserNounsHolder.map(noun => noun.content);
      this.onlyUserVerbs = this.onlyUserVerbsHolder.map(noun => noun.content);
      this.onlyuserDescriptors = this.onlyUserDescriptorsHolder.map(noun => noun.content);

      console.log('person', this.nouns, 'action', this.actions, 'descriptor', this.descriptors);
    });
    console.log('appcomponent oninit', this.user, this.nouns, this.actions, this.descriptors)
  }

  ngAfterViewChecked() {}

  generateTheory() {
    const rando1 = Math.floor(Math.random() * 137)
    this.tempPerson = this.nouns[rando1];
    const rando2 = Math.round(Math.random() * 122);
    this.tempAction = this.actions[rando2];
    const rando3 = Math.round(Math.random() * 50);
    this.tempAdverb = this.descriptors[rando3];
    this.personFade = !this.personFade;
    this.adverbFade = !this.adverbFade;
    this.actionFade = !this.actionFade;
    console.log(this.personFade);
  }

  generatePerson() {
    const rando = Math.floor(Math.random() * 137);
    this.tempPerson = this.nouns[rando];
    this.personFade = !this.personFade;
    console.log(this.user);
  }

  generateAction() {
    const rando = Math.floor(Math.random() * 122);
    this.tempAction = this.actions[rando];
    this.actionFade = !this.actionFade;
  }

  generateAdverb() {
    const rando = Math.round(Math.random() * this.descriptors.length);
    this.tempAdverb = this.descriptors[rando];
    this.adverbFade = !this.adverbFade;
  }

  toggleData() {
    if (this.user) {
      // console.log('hello', this.user[0].username, this.userNouns, this.userVerbs, this.userDescriptors);
    }
  }
}
