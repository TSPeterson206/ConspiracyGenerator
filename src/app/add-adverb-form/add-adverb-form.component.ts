import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  HttpClient
} from '@angular/common/http';


@Component({
  selector: 'app-add-adverb-form',
  templateUrl: './add-adverb-form.component.html',
  styleUrls: ['./add-adverb-form.component.css']
})
export class AddAdverbFormComponent implements OnInit {

  @Input() user:any;

  formPayload:any;
  addDescriptorHolder:any;

  @Output() formOut: EventEmitter<any> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.formPayload = this.formBuilder.group({
      addDescriptor:''
    });
  }

  ngOnInit() {
  }

  addDescriptor(event:any){
    this.addDescriptorHolder = event.target.value
    console.log('adddescriptor content',this.addDescriptorHolder)
  }

  addDescriptorFinal(){
    console.log('hitting adddescriptor', this.user,this.addDescriptorHolder);
    this.http.post(`http://localhost:8000/descriptors/${this.user[0].id}`,{user_id:`${this.user[0].id}`,content:this.addDescriptorHolder})
    .subscribe(
      data  => {
      console.log("POST Request is successful ", data);
      },
      error  => {console.log("Error", error);}
    )
    this.formOut.emit(this.addDescriptorHolder);
    this.formPayload.reset();
  }

}
