import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-add-verb-form',
  templateUrl: './add-verb-form.component.html',
  styleUrls: ['./add-verb-form.component.css']
})
export class AddVerbFormComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) {
  }

  @Input() user:any;
  addVerbHolder:any;
  @Output() formOut: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  addVerb(event:any){
    this.addVerbHolder = event.target.value
    console.log('addverb content',this.addVerbHolder)
  }

  addVerbFinal(){
    console.log('hitting addverb', this.user,this.addVerbHolder);
    this.http.post(`http://localhost:8000/verbs/${this.user[0].id}`,{user_id:`${this.user[0].id}`,content:this.addVerbHolder})
    .subscribe(
      data  => {
      console.log("POST Request is successful ", data);
      },
      error  => {console.log("Error", error);}
    )
    this.formOut.emit(this.addVerbHolder);
    // this.formPayload.reset();
  }
}
