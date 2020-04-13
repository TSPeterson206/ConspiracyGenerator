import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  username:string='';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.username = JSON.parse(localStorage.getItem('user')).username;
  }

  onLogout() {
    this.username='';
    this.authService.logout();
  }
  
}
