import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/headers';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  constructor(public router: Router, public http: Http) { }

  login(event, email, password) {
    event.preventDefault();
    let body = JSON.stringify({ email, password });
    this.http.post('http://barbelo.herokuapp.com/api/authentication', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('id_token', response.json().id_token);
          this.router.navigate(['project']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
          this.router.navigate(['register']);

        }
      );
  }

  ngOnInit() {
  }

  signup(event) {
    event.preventDefault();
    this.router.navigate(['signup']);
  }

}