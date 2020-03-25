import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  HttpClient
} from '@angular/common/http';


@Component({
  selector: 'app-add-person-form',
  templateUrl: './add-person-form.component.html',
  styleUrls: ['./add-person-form.component.css']
})
export class AddPersonFormComponent implements OnInit {

  @Input() user:any;

  formPayload:any;
  addNounHolder:any;
  addVerbHolder:any;
  addDescriptorHolder:any;

  isCollapsed:Boolean;


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.formPayload = this.formBuilder.group({
      addNoun:''
    });

    // this.isCollapsed=true;
  }

  ngOnInit() {
  }

  addNoun(event:any){
    this.addNounHolder = event.target.value
    console.log('addnoun content',this.addNounHolder)
  }

  addNounFinal(){
    console.log('hitting addnoun', this.user,this.addNounHolder);
    this.http.post(`http://localhost:8000/nouns/${this.user[0].id}`,{user_id:`${this.user[0].id}`,content:this.addNounHolder})
    .subscribe(
      data  => {
      console.log("POST Request is successful ", data);
      },
      error  => {console.log("Error", error);}
    )
    this.formPayload.reset();

  }

}
