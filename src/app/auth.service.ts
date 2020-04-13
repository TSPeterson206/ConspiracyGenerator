import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ServerService } from './server.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private token: string;
  private user:any;

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router, private server: ServerService, private http: HttpClient) {
    console.log('Auth Service');
    const userData = localStorage.getItem('user');
    if (userData) {
      console.log('Logged in from memory');
      const user = JSON.parse(userData);
      console.log('userdata',userData)
      this.token = user.token;
      this.server.setLoggedIn(true, this.token);
      this.loggedIn.next(true);
    }
  }

  async login(user) {
    console.log('hitting authservice login', user);

await this.http.get('http://localhost:8000/users').toPromise().then(result=>
{this.user=result; this.user=this.user.filter((ele)=>ele.email===user.email);}
)
console.log('final user', this.user);

    if (user.email !== '' && user.password !== '' ) {
      return this.server.request('POST', '/users/signup/login', {
        username:user.username,
        email: user.email,
        password: user.password
      }).subscribe((response: any) => {
        console.log('response',response)
        if (response.auth === true && response.token !== undefined) {
          this.token = response.token;
          this.server.setLoggedIn(true, this.token);
          this.loggedIn.next(true);
          const userData = {
            token: this.token,
            userId:this.user[0].id,
            username:this.user[0].username
          };
          localStorage.setItem('user', JSON.stringify(userData));
          this.router.navigateByUrl('/home');
        }
      });
    }
  }

  logout() {
    this.server.setLoggedIn(false);
    delete this.token;

    this.loggedIn.next(false);
    localStorage.clear();
    this.router.navigate(['/']);
  }
}