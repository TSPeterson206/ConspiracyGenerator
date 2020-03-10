import { Component, OnInit,AfterViewChecked, AfterContentInit, AfterViewInit} from '@angular/core';
import {} from './person/person.component'
import { HttpClient } from '@angular/common/http';
import { tap,concatMap} from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked, AfterContentInit, AfterViewInit{
  title = 'conspiracyGenerator';
  personFade=true;
  adverbFade=true;
  actionFade=true;
  user:any;

  stockNouns:any;
  userNouns:any;
  userVerbs:any;
  userDescriptors:any;

  constructor(private http: HttpClient){}
  

  person = ['Alex Jones', 'Hillary Clinton', 'Bill Clinton', 'The Illuminati', 'The federal government', 'Conor Mcgregor', 'Jeff Bezos', 'Donald Trump', 'The Magnificent Twelve', 'The FBI', 'Michael Jackson', 'R Kelly', 'Jay Inslee', 'Vincent D\'onofrio', 'Alexander Graham Bell', 'Our founding father', 'Captain James Tiberius Kirk', 'Justin Timberlake','Lindsey Lohan','Britney Spears','The Dean of UCLA','Jeffrey Tambor','DMX','Wakka Flakka Flame','Russel Simmons','James Franco','Steven Tyler','Joe Perry','Steve Perry','Sarah MacLachlan','Aziz Ansari','Jeffrey Epstein','Mark Cuban','Damond Dash','Barbara Corcoran','Jared Fogle','Theo Von','Brendan Schaub','Carlos Mencia','Jesse Jones','Steve Pool','Fedor Emelianienko','Dante Alighieri','John Grisham','Woody Harrellson','Mathew McConaughey','Danny Glover','Mel Gibson','Frank Sinatra','George Lucas','Childish Gambino','Tupac Shakur','The Notorious B.I.G.','Christina Aguilera','Carson Daily','Dax Shephard','Kirsten Bell','Malcom Gladwell','Ghandi','Ron Swanson','Steve Carrell','Jon Krasinski','Rainn Wilson','John Carpenter','Oprah Winfrey','Tom Brady','Russell Wilson','Aaron Rodgers','Ben Roethlisberger','Brad Pitt','Jennifer Aniston','Mathew Lillard','Courtney Cox','Matt LeBlanc','Matthew Perry','David Schwimmer','Jerry Seinfeld','Jason Alexander','Michael Richards','Adolf Hitler\'s nephew','James Brown','Gwen Stefani','Eddie Vedder','James Hetfield','Metallica','My Chemical Romance','George Lopez','Lars Von Trier','Elvis Presley','Andy Dick','Elon Musk','Bill Gates','Matt Groening','Joseph Smith','The coastal elite','Pennsylvania democrats','Senator Patty Murray','Howard Stern','Rip Torn','Casey Kasem','Engelbert Humperdink','Steve Jobs','Mark Zuckerberg','Howard Schulz','The Walton Family','The executive board of Babies R\' Us','Wolf Blitzer','Stone Phillips','Dan Rather','Kim Kardashian','Charles Barkley','Sandra Bullock','Jason Bateman','David Letterman','Conan O\' Brien','Jay Leno','Jimmy Fallon','James Corden','Anna Paquin','George Romero','The case of The Fast and the Furious','Paul Walker','Steve Wozniak','Jim Parsons','Alex Rodriguez','Barry Bonds','George W Bush','Thomas Jefferson','Kelly Clarkson','Cormac McCarthy','Henry David Thoreau','Michael Crichton','Rupaul','The cast of the musical Cats','Bill W','Edward Snowden','Ned Flanders'];
  tempPerson:string;
  action = ['put flouride in our drinking water in order to control out minds','was responsible for  9/11', 'is the orchestrator of pizzagate','embezzles from the Boeing pension fund', 'can control the weather','has the key to entering the matrix', 'is actually the tooth fairy','invented the phrase "YOLO"','invented the internet','sells organs on the black market','is the real Dread Pirate Roberts','never learned to read','knows that Nicholas Cage actually did steal the declaration of independence','successfully cloned a congressman', 'is actually over 600 years old','plays poker with the devil','has danced with the devil in the pale moonlight','ghost wrote all of Shakespeare\'s plays','is actually a clone','has kept a tight lid on hydro-fusion','funds dark-web red rooms','is actually one of a set of triplets','is actually two dwarves in a trenchcoat','orchestrated the invasion of Iraq','planned the Bay of Pigs invasion','funds online Red Rooms','released crack-cocaine to the public','killed JFK','hangs out with aliens','knows that Men In Black is a true story','lied on the mortgage application','was the true author of War and Peace','invented the cobb salad','has Benjamin Button syndrome','records all of your movements','faked the moon landing','perpetuated the lie that the moon is in fact made of cheese','was the entity on the grassy knoll','put Lee Harvey Oswald up to it','knows that James Earl Ray didn\'t kill MLK Jr','operates a car theft ring','ran a bigfoot breeding program','killed and made bigfoot into a rug','embezzled from the ILWU pension fund','performed cattle mutilations and blames the catholic church','printed counterfeit money and used it to bribe government officials','ran a prostituion ring out of a Chuck E Cheese','framed Roger Rabbit','started a cult in Azerbaijan','poisoned the watering hole','uses numbers station to distribute propaganda','s','stole the cookie from the cookie jar','puts razorblades in halloween candy','kept chupacabras as pets','knows that reptilian shapeshifters are real','is a reptilian shapeshifter','funneled money to neo-nazis','made Trader Joe\'s parking lots small to give the appearance of more business','was the brains behind watergate','got America involved in the Vietnam conflict','used Freeway Ricky Ross to traffic cocaine','is in cahoots with El Chapo','secretly backs the Sinaloa cartel','was in cahoots with Pablo Escobar','was the real Slim Shady','took the lindbergh baby','perptrated the largest ponzi scheme of all time','used shell companies to launder money','set fires in the Amazon rainforest','stole cable television','sold cable descramblers','tried to pass off Dominican cigars as cubans','violated the Cuban trade embargo','leaked secrets to Vladimir Putin','made that phone call to the Ukraine','was the real Green River Killer','was Ted Bundy\'s accomplice','bugged the White House phone','took a dive in the prize fight','is not real','does not exist','created Isis','is the brains behind election tampering','has hitmen on retainer','started the idea that Australia does not exist','kept the Jersey Devil as a pet','sympathized with the Nazi party','invented rollerblades as a method of oppression','killed small animals for fun','sawed the barrels of their guns to an illegal length','dealt weapons to resistance fighters','started the flat-earth theory','stole money from the church collection plate','covered up Nixon\'s indescretions','killed Teresa Halbach','dealt cards from the bottom of the deck','crowdfunds terrorism','sheltered Osama Bin Laden','has been dead for 40 years','wrongfully convicted people to fill for-profit prisons','printed the brand name on candy to save chocolate','was beind MK Ultra','is a pod-person','disposes of bodies with a pig farm','commits murder in the name of Baphomet','worshipped the devil','planned the Waco invasion','shot Greedo first','fired at Han Solo first','ran a poppy plantation','trafficked methamphetamine precursors','falsified court records','smuggled counterfeit goods from China','stole candy from a baby','covered up government assassinations','sold secrets to the communists','lied about vaccines causing autism','cut corners on construction jobs','skipped out on many bar tabs','lied under oath','printed fake $2 bills'];
  tempAction:string;
  adverb = ['and it will happen again', 'and there are no regrets about it', 'and yet the people are cool with it', 'which is so uncool', 'and it isn\'t the first time', 'and yet the world still turns', 'and that is how it goes', 'and you are next!', 'and also is a flat-eather', 'and is alive and well in Cuba', 'and has never paid federal income tax','and tried to frame the pope for it','and wouldn\'t hesitate to do it again','and has never given it a second thought','and you are just going to sit there?!','and what are you gonna do about it?!','and it is best to just make peace with that','and there is little that you can do','and it might just mean the end of us all','and this is what makes Jeff Bezos sleep soundly','and thus all the world is a stage','and it is the sign of the end of times','and it may bring on the apocalypse','and frankly it was about time','and we never saw this coming','and so it is time to abandon all hope','and it is best to just let it go','and that is tied up in a tidy little package','and I urge you to intervene','and you are powerless to intervene','and knowing is half the battle','and it is a whole thing','so whatcha gonna do about it?','and I will leave you with that information','so marinate on that for a minute','and it wasn\'t a solo job','and they did not act alone','and they sleep just fine at night','and it was probably inevitable','and it was the smallest offense committed','and that should spook you to the core','and I wish I didn\'t know the truth','and you do not know the half of it','and now your eyes are open','and history will repeat itself','and they know that time is a flat circle','and it was not even considered a big deal','and it occurred multiple times','and the truth is still buried','and the public has no clue','and I wish I had thought of it first',];
  tempAdverb:string;

  ngOnInit(){  
    //GET USER
    this.http.get('http://localhost:8000/users/1').pipe(
    tap(result => this.user = result),
// GET USER NOUNS
    concatMap(user => this.http.get(`http://localhost:8000/nouns/${this.user[0].id}`)),
    tap(result => this.userNouns = result),
  // GET USER VERBS
    concatMap(verb => this.http.get(`http://localhost:8000/verbs/${this.user[0].id}`)),
    tap(result => this.userVerbs = result),
  // GET USER DESCRIPTORS
    concatMap(descriptor => this.http.get(`http://localhost:8000/descriptors/${this.user[0].id}`)),
    tap(result => this.userDescriptors = result)
    ).subscribe(() => {

  });
  //this.userNouns = this.userNouns.map((ele)=>{console.log('hitting usernouns MAP');ele=ele.content; return ele});
  console.log('appcomponent oninit', this.user, this.userNouns, this.userVerbs, this.userDescriptors)
}

ngAfterContentInit(){
  // this.userNouns = this.userNouns.map((ele)=>{console.log('hitting usernouns MAP');ele=ele.content; return ele});
}

  ngAfterViewChecked(){
  console.log('appcomponent afterviewchecked', this.user, this.userVerbs, this.userDescriptors)
  }

  ngAfterViewInit(){
    console.log('appcomponent afterviewinit', this.user, this.userNouns, this.userVerbs, this.userDescriptors)
    }

    mapEmOut(array1,array2,array3){
      this.userNouns = this.userNouns.map((ele)=>{console.log('hitting usernouns MAP1');ele=ele.content; return ele});
      array2 = array2.map((ele)=>{console.log('hitting usernouns MAP2');ele=ele.content; return ele});
      array3 = array3.map((ele)=>{console.log('hitting usernouns MAP3');ele=ele.content; return ele});
        }

  generateTheory() {
    const rando1 = Math.floor(Math.random() * 137)
    this.tempPerson = this.person[rando1];
    const rando2 = Math.round(Math.random() * 122);
    this.tempAction = this.action[rando2];
    const rando3 = Math.round(Math.random() * 50);
    this.tempAdverb = this.adverb[rando3];
    this.personFade = !this.personFade;
    this.adverbFade=!this.adverbFade;
    this.actionFade=!this.actionFade;
    console.log(this.personFade);
  }

  generatePerson(){
    const rando = Math.floor(Math.random() * 137);
    this.tempPerson=this.person[rando];
    this.personFade = !this.personFade;
    // this.http.get('http://localhost:8000/users/1').subscribe((result)=>{this.user=result})
    console.log(this.user);

  }

  generateAction(){
    const rando = Math.floor(Math.random() * 122);
    this.tempAction=this.action[rando];
    this.actionFade=!this.actionFade;
  }

  generateAdverb(){
    const rando = Math.round(Math.random()*50);
    this.tempAdverb=this.adverb[rando];
    this.adverbFade=!this.adverbFade;
  }

  toggleData(){
    if(this.user){
      //this.http.get(`http://localhost:8000/nouns/${this.user.id}`).pipe(tap((res)=>{this.userNouns=res; return this.userNouns})).subscribe(()=>{});
      this.userNouns = this.userNouns.map((ele)=>{console.log('hitting usernouns MAP1');ele=ele.content; return ele});
      this.userVerbs = this.userVerbs.map((ele)=>{console.log('hitting usernouns MAP1');ele=ele.content; return ele});
      this.userDescriptors = this.userDescriptors.map((ele)=>{console.log('hitting usernouns MAP1');ele=ele.content; return ele});

    console.log('hello',this.user[0].username, this.userNouns, this.userVerbs, this.userDescriptors);
  }
  }
}


// person = ['Alex Jones', 'Hillary Clinton', 'Bill Clinton', 'The Illuminati', 'The federal government', 'Conor Mcgregor', 'Jeff Bezos', 'Donald Trump', 'The Magnificent Twelve', 'The FBI', 'Michael Jackson', 'R Kelly', 'Jay Inslee', 'Vincent D\'onofrio', 'Alexander Graham Bell', 'Our founding father', 'Captain James Tiberius Kirk', 'Justin Timberlake','Lindsey Lohan','Britney Spears','The Dean of UCLA','Jeffrey Tambor','DMX','Wakka Flakka Flame','Russel Simmons','James Franco','Steven Tyler','Joe Perry','Steve Perry','Sarah MacLachlan','Aziz Ansari','Jeffrey Epstein','Mark Cuban','Damond Dash','Barbara Corcoran','Jared Fogle','Theo Von','Brendan Schaub','Carlos Mencia','Jesse Jones','Steve Pool','Fedor Emelianienko','Dante Alighieri','John Grisham','Woody Harrellson','Mathew McConaughey','Danny Glover','Mel Gibson','Frank Sinatra','George Lucas','Childish Gambino','Tupac Shakur','The Notorious B.I.G.','Christina Aguilera','Carson Daily','Dax Shephard','Kirsten Bell','Malcom Gladwell','Ghandi','Ron Swanson','Steve Carrell','Jon Krasinski','Rainn Wilson','John Carpenter','Oprah Winfrey','Tom Brady','Russell Wilson','Aaron Rodgers','Ben Roethlisberger','Brad Pitt','Jennifer Aniston','Mathew Lillard','Courtney Cox','Matt LeBlanc','Matthew Perry','David Schwimmer','Jerry Seinfeld','Jason Alexander','Michael Richards','Adolf Hitler\'s nephew','James Brown','Gwen Stefani','Eddie Vedder','James Hetfield','Metallica','My Chemical Romance','George Lopez','Lars Von Trier','Elvis Presley','Andy Dick','Elon Musk','Bill Gates','Matt Groening','Joseph Smith','The coastal elite','Pennsylvania democrats','Senator Patty Murray','Howard Stern','Rip Torn','Casey Kasem','Engelbert Humperdink','Steve Jobs','Mark Zuckerberg','Howard Schulz','The Walton Family','The executive board of Babies R\' Us','Wolf Blitzer','Stone Phillips','Dan Rather','Kim Kardashian','Charles Barkley','Sandra Bullock','Jason Bateman','David Letterman','Conan O\' Brien','Jay Leno','Jimmy Fallon','James Corden','Anna Paquin','George Romero','The case of The Fast and the Furious','Paul Walker','Steve Wozniak','Jim Parsons','Alex Rodriguez','Barry Bonds','George W Bush','Thomas Jefferson','Kelly Clarkson','Cormac McCarthy','Henry David Thoreau','Michael Crichton','Rupaul','The cast of the musical Cats','Bill W','Edward Snowden','Ned Flanders'];
//   tempPerson:string;
//   action = ['put flouride in our drinking water in order to control out minds','was responsible for  9/11', 'is the orchestrator of pizzagate','embezzles from the Boeing pension fund', 'can control the weather','has the key to entering the matrix', 'is actually the tooth fairy','invented the phrase "YOLO"','invented the internet','sells organs on the black market','is the real Dread Pirate Roberts','never learned to read','knows that Nicholas Cage actually did steal the declaration of independence','successfully cloned a congressman', 'is actually over 600 years old','plays poker with the devil','has danced with the devil in the pale moonlight','ghost wrote all of Shakespeare\'s plays','is actually a clone','has kept a tight lid on hydro-fusion','funds dark-web red rooms','is actually one of a set of triplets','is actually two dwarves in a trenchcoat','orchestrated the invasion of Iraq','planned the Bay of Pigs invasion','funds online Red Rooms','released crack-cocaine to the public','killed JFK','hangs out with aliens','knows that Men In Black is a true story','lied on the mortgage application','was the true author of War and Peace','invented the cobb salad','has Benjamin Button syndrome','records all of your movements','faked the moon landing','perpetuated the lie that the moon is in fact made of cheese','was the entity on the grassy knoll','put Lee Harvey Oswald up to it','knows that James Earl Ray didn\'t kill MLK Jr','operates a car theft ring','ran a bigfoot breeding program','killed and made bigfoot into a rug','embezzled from the ILWU pension fund','performed cattle mutilations and blames the catholic church','printed counterfeit money and used it to bribe government officials','ran a prostituion ring out of a Chuck E Cheese','framed Roger Rabbit','started a cult in Azerbaijan','poisoned the watering hole','uses numbers station to distribute propaganda','s','stole the cookie from the cookie jar','puts razorblades in halloween candy','kept chupacabras as pets','knows that reptilian shapeshifters are real','is a reptilian shapeshifter','funneled money to neo-nazis','made Trader Joe\'s parking lots small to give the appearance of more business','was the brains behind watergate','got America involved in the Vietnam conflict','used Freeway Ricky Ross to traffic cocaine','is in cahoots with El Chapo','secretly backs the Sinaloa cartel','was in cahoots with Pablo Escobar','was the real Slim Shady','took the lindbergh baby','perptrated the largest ponzi scheme of all time','used shell companies to launder money','set fires in the Amazon rainforest','stole cable television','sold cable descramblers','tried to pass off Dominican cigars as cubans','violated the Cuban trade embargo','leaked secrets to Vladimir Putin','made that phone call to the Ukraine','was the real Green River Killer','was Ted Bundy\'s accomplice','bugged the White House phone','took a dive in the prize fight','is not real','does not exist','created Isis','is the brains behind election tampering','has hitmen on retainer','started the idea that Australia does not exist','kept the Jersey Devil as a pet','sympathized with the Nazi party','invented rollerblades as a method of oppression','killed small animals for fun','sawed the barrels of their guns to an illegal length','dealt weapons to resistance fighters','started the flat-earth theory','stole money from the church collection plate','covered up Nixon\'s indescretions','killed Teresa Halbach','dealt cards from the bottom of the deck','crowdfunds terrorism','sheltered Osama Bin Laden','has been dead for 40 years','wrongfully convicted people to fill for-profit prisons','printed the brand name on candy to save chocolate','was beind MK Ultra','is a pod-person','disposes of bodies with a pig farm','commits murder in the name of Baphomet','worshipped the devil','planned the Waco invasion','shot Greedo first','fired at Han Solo first','ran a poppy plantation','trafficked methamphetamine precursors','falsified court records','smuggled counterfeit goods from China','stole candy from a baby','covered up government assassinations','sold secrets to the communists','lied about vaccines causing autism','cut corners on construction jobs','skipped out on many bar tabs','lied under oath','printed fake $2 bills'];
//   tempAction:string;
//   adverb = ['and it will happen again', 'and there are no regrets about it', 'and yet the people are cool with it', 'which is so uncool', 'and it isn\'t the first time', 'and yet the world still turns', 'and that is how it goes', 'and you are next!', 'and also is a flat-eather', 'and is alive and well in Cuba', 'and has never paid federal income tax','and tried to frame the pope for it','and wouldn\'t hesitate to do it again','and has never given it a second thought','and you are just going to sit there?!','and what are you gonna do about it?!','and it is best to just make peace with that','and there is little that you can do','and it might just mean the end of us all','and this is what makes Jeff Bezos sleep soundly','and thus all the world is a stage','and it is the sign of the end of times','and it may bring on the apocalypse','and frankly it was about time','and we never saw this coming','and so it is time to abandon all hope','and it is best to just let it go','and that is tied up in a tidy little package','and I urge you to intervene','and you are powerless to intervene','and knowing is half the battle','and it is a whole thing','so whatcha gonna do about it?','and I will leave you with that information','so marinate on that for a minute','and it wasn\'t a solo job','and they did not act alone','and they sleep just fine at night','and it was probably inevitable','and it was the smallest offense committed','and that should spook you to the core','and I wish I didn\'t know the truth','and you do not know the half of it','and now your eyes are open','and history will repeat itself','and they know that time is a flat circle','and it was not even considered a big deal','and it occurred multiple times','and the truth is still buried','and the public has no clue','and I wish I had thought of it first',];
//   tempAdverb:string;