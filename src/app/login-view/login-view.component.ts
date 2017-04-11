import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/index';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})

export class LoginViewComponent implements OnInit {

  constructor(public router: Router, public authenticationService: AuthenticationService, public dialog: MdDialog) { }

  login(email : string, password : string) {
    this.authenticationService.login(email, password)
      .subscribe(result =>  {
          if (result === true){
            this.router.navigate(['/']);
          }
        },
        error => {
          let cause = JSON.parse(error._body).cause;
          let errorMessage = "The " + cause + " you have enter is incorrect!";
          this.dialog.open(ErrorDialogComponent, {data: errorMessage});
        }
      );
  }

  ngOnInit() {
  }
  
}