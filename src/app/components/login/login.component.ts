import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/domain/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  user: User = new User();

  form: FormGroup | undefined;
  loading = false;
  submitted = false;
  returnUrl: string = '';
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService)
    {

    }

ngOnInit() {

//  this.form = this.formBuilder.group({
  //  username: ['', Validators.required],
   // password: ['', Validators.required]
 // });

// reset login status
this.authenticationService.logout();
// get return url from route parameters or default to '/'
//this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

}

onSubmit(): void{

  this.loading = true;
  this.authenticationService.login(this.user.username, this.user.password)
      .pipe(first ())
      .subscribe(
          data => {
              this.router.navigate([this.returnUrl]);
          },
          error => {
              this.error = error;
              this.loading = false;
          });

}

//  login(c: IVisitors) {
//    this.loading = true;
//    this.authenticationService.login(c.username, c.password); // If success, a token will be added to the localstorage
//    this.router.navigate([this.returnUrl]);
//    }


  }
