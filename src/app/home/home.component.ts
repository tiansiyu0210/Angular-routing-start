import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              private auth: AuthService) { }

  ngOnInit() {
  }

  onLoadServer(){
    // do something first
    this.router.navigate(['/servers', 1, 'edit'], {queryParams: {allowEdit: 1}, fragment: 'loading'});
  }

  logIn() {
    this.auth.login();
  }

  logOut() {
    this.auth.logout();
  }

}
