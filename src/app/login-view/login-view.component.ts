import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/index';
import { User } from '../_models/user';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})

export class LoginViewComponent implements OnInit {
  error = {subject: "", message: ""};

  constructor(public router: Router, public authenticationService: AuthenticationService, private user: User) { }

  login() {
    this.error = {subject: "", message: ""};

    this.authenticationService.login(this.user)
      .subscribe(result =>  {
          if (result === true){
            this.router.navigate(['/']);
          }
        },
        error => {
          let cause = JSON.parse(error._body).cause;
          this.error.subject = cause;
          this.error.message = "The " + cause + " you have entered is incorrect!";
        }
      );
  }

  ngOnInit() {
  }
  
}

// public dialog: MdDialog
// this.dialog.open(ErrorDialogComponent, {data: errorMessage});