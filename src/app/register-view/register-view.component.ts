import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../_common/headers';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit {

  constructor(public router: Router, public http: Http) { }

  register(email, password, passwordConfirmation, fName, lName, birthDate) {
    let body = JSON.stringify({ email, password, passwordConfirmation, fName, lName, birthDate });
    this.http.put('http://barbelo.herokuapp.com/api/authentication', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('id_token', response.json().id_token);
          this.router.navigate(['search']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
          this.router.navigate(['dashboard']);
        }
      );
  }

  ngOnInit() {
  }


}