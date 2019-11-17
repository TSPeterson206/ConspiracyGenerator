import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
person=['Alex Jones','Hillary Clinton','Bill Clinton','The Illuminati','The federal government','Conor Mcgregor','Jeff Bezos','Donald Trump','The Magnificent Twelve','The FBI','Michael Jackson','R Kelly','Jay Inslee','Vincent D\'onofrio','Alexander Graham Bell','Our founding father','Captain James Tiberius Kirk'];
  tempPerson='';
constructor() { 
  // person=this.person;
  }
  ngOnInit() {
  }

  generatePerson(){
    const rando = Math.round(Math.random()*10);
    this.tempPerson=this.person[rando];
    console.log(rando)
  }
}

module.exports=this.person;