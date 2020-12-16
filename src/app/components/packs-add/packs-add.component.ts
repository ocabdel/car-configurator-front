import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IPacks } from 'src/app/domain/ipacks';
import { PacksService } from 'src/app/services/packs.service';


@Component({
  selector: 'app-packs-add',
  templateUrl: './packs-add.component.html',
  styleUrls: ['./packs-add.component.scss']
})
export class PacksAddComponent implements OnInit {

  form: FormGroup | undefined;

    constructor(private fb: FormBuilder,
                private service: PacksService,
                private router: Router)
                {       }

    ngOnInit() {

      this.form = this.fb.group({

        //idPack : new FormControl('', Validators.required),
        //namePack: ['', Validators.required],
        //reference: ['', Validators.required],
        //unitPrice: ['', Validators.required]
        //imageURL: ['', Validators.required]

          //idPack : new FormControl('', Validators.required),
          namePack: new FormControl('Name Pack', Validators.required),
          reference: new FormControl('Reference', Validators.required),
          unitPrice: new FormControl('1222.99', [Validators.required,
          Validators.pattern('[+]?[0-9.]+')]),
          imageURL:
          new FormControl('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Pscontroller-icon.svg/256px-Ps-controller-icon.svg.png'),

       });
    }

    addPack(prod: IPacks) {

      this.service
      .addPack(prod)
      .subscribe( res => {

        console.log('Ajout avec succès du Pack : ' + res );
        this.router.navigate(['/packs']);
        });

    }
}
