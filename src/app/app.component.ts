import { Component } from '@angular/core';
import { Car } from './car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  cars: Car[];

  constructor() {
    var car = new Car();
    car.brand = 'yugo';
    car.vin = "http://www.google.com";
    this.cars = [ car ];
   }
}
