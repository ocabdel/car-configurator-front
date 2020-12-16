import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configurator-start',
  templateUrl: './configurator-start.component.html',
  styleUrls: ['./configurator-start.component.scss']
})
export class ConfiguratorStartComponent implements OnInit {

  resultModel: string;

  constructor() { }

  ngOnInit(): void {
  }

  public selectionStep1(message : string){
    alert(message);
    this.resultModel=message;
    console.log('Le modèle a bien reçu la valeur suivante : ' + this.resultModel );
  }

}
