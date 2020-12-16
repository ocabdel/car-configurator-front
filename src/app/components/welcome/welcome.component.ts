import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 3000, noPause: true, showIndicators: true } }
  ],
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
