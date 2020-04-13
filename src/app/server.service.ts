import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

const baseUrl = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private loggedIn = false;
  private token: string;

  constructor(private http: HttpClient) {}

  setLoggedIn(loggedIn: boolean, token?: string) {
    console.log('hitting setloggedin')
    this.loggedIn = loggedIn;
    this.token = token;
  }

  request(method: string, route: string, data?: any) {
    console.log('hitting1', this.loggedIn, this.token, data);
    if (method === 'GET') {
      return this.get(route, data);
    }

    const header = new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
.set('Access-Control-Allow-Origin', '*')
.set('Access-Control-Allow-Credentials', 'true');
console.log('header',header,'method',method,'baseURL',baseUrl,'route',route, 'data',data);
    // const header = (this.loggedIn) ? {
    //    Authorization: `Bearer ${this.token}`
    //   } : undefined;

    

    return this.http.request(method, baseUrl + route, {
      body: data,
      responseType: 'json',
      observe: 'body',
      headers: header
    });
  }

  get(route: string, data?: any) {
    console.log('hitting2');

    // const header = (this.loggedIn) ? { Authorization: `Bearer ${this.token}` } : undefined;
    const header = (this.loggedIn) ? {
      Authorization: `Bearer ${this.token}`,
       'Access-Control-Allow-Origin':'http://localhost:8000',
       'Access-Control-Allow-Credentials': 'true'
     } : undefined;

    let params = new HttpParams();
    if (data !== undefined) {
      Object.getOwnPropertyNames(data).forEach(key => {
        params = params.set(key, data[key]);
      });
    }

    return this.http.get(baseUrl + route, {
      responseType: 'json',
      headers: header,
      params
    });
  }
}