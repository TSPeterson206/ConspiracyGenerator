import {
  Component,
  OnInit,
  AfterViewChecked,
  AfterViewInit,
  AfterContentInit,
  HostBinding
} from '@angular/core';
import {} from '../person/person.component'
import {
  HttpClient
} from '@angular/common/http';
import {
  tap,
  concatMap
} from 'rxjs/operators';
///
import { FormBuilder, FormControl } from '@angular/forms';
///

// @Directive({selector: '[ngModel]'})

import { ModalService } from '../_modal';


@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponent implements OnInit, AfterContentInit, AfterViewChecked {

  constructor(private http: HttpClient, private modalService: ModalService) {
  }

  control:FormControl;

  title = 'conspiracyGenerator';
  personFade = true;
  adverbFade = true;
  actionFade = true;
  user: any;

  userNouns: any;
  userActions: any;
  userDescriptors: any;

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
  onlyUserDescriptors:any;

  onlyUserNounsHolder:any;
  onlyUserVerbsHolder:any;
  onlyUserDescriptorsHolder:any;

  addNounHolder:any;
  addVerbHolder:any;
  addDescriptorHolder:any;

  nounBooleans:any[]=[true,true,true];
  verbBooleans:any[]=[true,true,true];
  descriptorBooleans:any[]=[true,true,true];

  allNouns:any=[];
  allVerbs:any=[];
  allDescriptors:any=[];

  selected:Boolean = false;

  formSelected:Array<boolean>=[false,false,false];

  ngOnInit() {

    const userId = JSON.parse(localStorage.getItem('user')).userId;
    //GET USER
    console.log('userId',userId)
    this.http.get(`http://localhost:8000/users/${userId}`).pipe(
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
      concatMap(descriptor => this.http.get(`http://localhost:8000/nouns/justUser/${this.user[0].id}`)),
      tap(result => this.onlyUserNounsHolder = result),
      // GET ONLY USER VERBS
      concatMap(descriptor => this.http.get(`http://localhost:8000/verbs/justUser/${this.user[0].id}`)),
      tap(result => this.onlyUserVerbsHolder = result),
      // GET ONLY USER DESCRIPTORS
      concatMap(descriptor => this.http.get(`http://localhost:8000/descriptors/justUser/${this.user[0].id}`)),
      tap(result => this.onlyUserDescriptorsHolder = result),


    ).subscribe(() => {
      // USER NOUNS,ACTIONS AND DESCRIPTORS
      this.userNouns = this.userNounsHolder.map(noun => noun.content);
      this.userActions = this.userVerbsHolder.map(verb => verb.content);
      this.userDescriptors = this.userDescriptorsHolder.map(descriptor => descriptor.content);
      //STOCK NOUNS,ACTIONS AND DESCRIPTORS
      this.stockNouns = this.stockNounsHolder.map(noun => noun.content);
      this.stockVerbs = this.stockVerbsHolder.map(noun => noun.content);
      this.stockDescriptors = this.stockDescriptorsHolder.map(noun => noun.content);
      //ONLY USERS NOUNS,ACTIONS AND DESCRIPTORS
      this.onlyUserNouns = this.onlyUserNounsHolder.map(noun => noun.content);
      this.onlyUserVerbs = this.onlyUserVerbsHolder.map(noun => noun.content);
      this.onlyUserDescriptors = this.onlyUserDescriptorsHolder.map(noun => noun.content);

      //All three default to loaded with the below values and checkboxes checked 
      this.allNouns = this.userNouns.concat(this.stockNouns).concat(this.onlyUserNouns);
      this.allVerbs = this.userActions.concat(this.stockVerbs).concat(this.onlyUserVerbs);
      this.allDescriptors = this.userDescriptors.concat(this.stockDescriptors).concat(this.onlyUserDescriptors);
    });


  }

  ngAfterContentInit(){

  }

  ngAfterViewChecked() {

  }

  generateTheory() {
    console.log('hitting generateTheory');
    const rando1 = Math.floor(Math.random() * this.allNouns.length)
    this.tempPerson = this.allNouns[rando1];
    const rando2 = Math.round(Math.random() * this.allVerbs.length);
    this.tempAction = this.allVerbs[rando2];
    const rando3 = Math.round(Math.random() * this.allDescriptors.length);
    this.tempAdverb = this.allDescriptors[rando3];
    this.personFade = !this.personFade;
    this.adverbFade = !this.adverbFade;
    this.actionFade = !this.actionFade;
    console.log(this.personFade);
  }

  generatePerson() {
    const rando = Math.floor(Math.random() * this.allNouns.length);
    console.log('hitting generatePerson', rando, this.allNouns.length, this.allNouns[rando]);
    this.tempPerson = this.allNouns[rando];
    this.personFade = !this.personFade;
  }

  generateAction() {
    const rando = Math.floor(Math.random() * this.allVerbs.length);
    console.log('hitting generateAction', rando, this.allVerbs.length, this.allVerbs[rando]);
    this.tempAction = this.allVerbs[rando];
    this.actionFade = !this.actionFade;
  }

  generateAdverb() {
    const rando = Math.round(Math.random() * this.allDescriptors.length);
    console.log('hitting generateAdverb', rando, this.allDescriptors.length, this.allDescriptors[rando]);
    this.tempAdverb = this.allDescriptors[rando];
    this.adverbFade = !this.adverbFade;
  }

  addVerb(){}

  addDescriptor(){}

  toggleData(value) {
if(value==='nouns'){
  console.log('hitting toggledata nouns before', this.userNouns);
    let nounpre=[];
    let nounuser=[];
    let nounalluser=[];

    this.nounBooleans[0] ? nounpre = this.stockNouns:null;
    this.nounBooleans[1] ? nounuser = this.userNouns:null;
    this.nounBooleans[2] ? nounalluser = this.onlyUserNouns : null;
    this.allNouns = nounpre.concat(nounuser).concat(nounalluser);
    console.log('hitting toggledata nouns after', this.userNouns);

}

if(value==='verbs'){
  console.log('hitting toggledata verbs',this.userActions);

  let verbpre=[];
  let verbuser=[];
  let verballuser=[];

  this.verbBooleans[0] ? verbpre = this.stockVerbs:null;
  this.verbBooleans[1] ? verbuser = this.userActions:null;
  this.verbBooleans[2] ? verballuser = this.onlyUserVerbs : null;
  this.allVerbs = verbpre.concat(verbuser).concat(verballuser);
}

if(value==='descriptors'){
  console.log('hitting toggledata descriptors');

  let descriptorpre=[];
  let descriptoruser=[];
  let descriptoralluser=[];

  this.descriptorBooleans[0] ? descriptorpre = this.stockDescriptors:null;
  this.descriptorBooleans[1] ? descriptoruser = this.userDescriptors:null;
  this.descriptorBooleans[2] ? descriptoralluser = this.onlyUserDescriptors : null;
  this.allDescriptors = descriptorpre.concat(descriptoruser).concat(descriptoralluser);
}


  }

onReceiveNoun(value, category){
  this.tempPerson=value;
  console.log('hitting onReceiveNoun',value, category);
  this.userNouns.push(value);
  this.toggleData(category)
  this.formSelected[0]=!this.formSelected[0];
}

onReceiveVerb(value, category){
  this.tempAction=value;
  console.log('hitting onReceiveVerb',value, category);
  this.userActions.push(value);
  this.toggleData(category);
  this.formSelected[1]=!this.formSelected[1];
}

onReceiveDescriptor(value, category){
  this.tempAdverb=value;
  console.log('hitting onReceiveDescriptor',value, category);
  this.userDescriptors.push(value);
  this.toggleData(category);
  this.formSelected[2]=!this.formSelected[2];

}

mapNouns(){
  // this.allNouns=this.allNouns.map((ele)=>ele+'\n').join('');
  console.log(this.allNouns);
}

//MODALS

async openModal(type:string,id: string) {
  this.refresh(type)
  this.modalService.open(id);
}

closeModal(id: string) {
  this.modalService.close(id);
}

async delete(idNum,type){
  await this.http.delete(`http://localhost:8000/${type}/${idNum}`).toPromise();
  await this.refresh(type)
  this.toggleData(type)

}

async refresh(type){
  if(type==='nouns'){
    this.userNouns= await this.http.get(`http://localhost:8000/${type}/${this.user[0].id}`).toPromise()
    this.userNounsHolder=this.userNouns;
    this.userNouns=this.userNouns.map(ele=>ele.content);
  
  }
  if(type==='verbs'){
    this.userActions = await this.http.get(`http://localhost:8000/${type}/${this.user[0].id}`).toPromise()
  this.userVerbsHolder=this.userActions;
    this.userActions=this.userActions.map(ele=>ele.content);
  }
  if(type==='descriptors'){
    this.userDescriptors = await this.http.get(`http://localhost:8000/${type}/${this.user[0].id}`).toPromise()
  this.userDescriptorsHolder=this.userDescriptors;
    this.userDescriptors=this.userDescriptors.map(ele=>ele.content);
  }
  
}

handleFormSwitch(type){
  if(type==='nouns'){
    (this.formSelected[1] || this.formSelected[2]) ? this.formSelected[0]=true : this.formSelected[0] = !this.formSelected[0]; this.formSelected[1]=false; this.formSelected[2]=false;
    }
  if(type==='verbs'){
    (this.formSelected[0] || this.formSelected[2]) ? this.formSelected[1]=true : this.formSelected[1] = !this.formSelected[1]; this.formSelected[0]=false; this.formSelected[2]=false;
    }
  if(type==='descriptors'){
  (this.formSelected[0] || this.formSelected[1]) ? this.formSelected[2]=true : this.formSelected[2] = !this.formSelected[2]; this.formSelected[0]=false; this.formSelected[1]=false;
  }
}

}