import { Component, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-add-person-form',
  templateUrl: './add-person-form.component.html',
  styleUrls: ['./add-person-form.component.css']
})
export class AddPersonFormComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) {
  }

  @Input() user:any;
  addNounHolder:any;
  @Input() allNouns:any;
  @Output() formOut: EventEmitter<any> = new EventEmitter();

  @ViewChild('nounForm', {static: false}) formValues;

  ngOnInit() {
  }

  addNoun(event:any){
    this.addNounHolder = event.target.value
    console.log('addnoun content',this.addNounHolder)
  }

  addNounFinal(value){
    console.log('hitting addnoun', this.user,this.addNounHolder);
    this.http.post(`http://localhost:8000/nouns/${this.user[0].id}`,{user_id:`${this.user[0].id}`,content:this.addNounHolder})
    .subscribe(
      data  => {
      console.log("POST Request is successful ", data);
      },
      error  => {console.log("Error", error);}
    )
    this.formOut.emit(this.addNounHolder);
    this.formValues.resetForm();  }
}
