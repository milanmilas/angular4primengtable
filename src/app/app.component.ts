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
  car: Car;
  
  constructor() {
    this.car = new Car();
    this.car.brand = 'yugo';
    this.car.vin = "http://www.google.com";
    this.cars = [ this.car ];

    this.start(1000);
   }

   start(counter){
     var local = this;
     console.log("start");
        this.car.year = counter;
        setTimeout(function(){
          counter++;
          local.start(counter);
        }, 5000);
      
    }

}
