import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUsers } from 'src/app/domain/iusers';
import { User } from 'src/app/domain/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss']
})
export class UsersAddComponent implements OnInit {

  form: FormGroup | undefined;

    constructor(private fb: FormBuilder,
                private service: UsersService,
                private router: Router)
                {       }


  ngOnInit(): void {

    this.form = this.fb.group({

      //idUser : new FormControl('', Validators.required),
      //nom: ['', Validators.required],
      //prenom: ['', Validators.required],
      //email: ['', Validators.required],
      //username: ['', Validators.required],
      //password: ['', Validators.required],
      //phone: ['', Validators.required],
      //idRole: ['', Validators.required]

        //idCar : new FormControl('', Validators.required),
        nom: new FormControl('Last Name', Validators.required),
        prenom: new FormControl('First Name', Validators.required),
        email: new FormControl('username@gmail.com', Validators.required),
        username: new FormControl('username', Validators.required),
        password: new FormControl('password', Validators.required),
        //phone: new FormControl('0499555899', [Validators.required,
         // Validators.pattern('[+]?[0-9.]+')])

     });
  }

  addUser(prod: User) {

    this.service
    .addUser(prod)
    .subscribe( res => {

      console.log('Ajout avec succès du User : ' + res );
      this.router.navigate(['/user']);
      });

  }

}
