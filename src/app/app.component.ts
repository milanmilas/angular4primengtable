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
    this.car = new Car({ vin: 'http://www.google.com',  brand: "yugo"});

    this.cars = [ this.car,
      new Car({ vin: '1leave',  brand: "yugo"}),
      new Car({ vin: '2modify',  brand: "yugo"}),
      new Car({ vin: '3',  brand: "yugo"})];

    this.start(3);
   }

   start(counter){
     var local = this;
     console.log("start");
        setTimeout(function(){
          let oldCounter = counter;
          counter++;

          // modify changed sets
          let car = local.cars.find((car: Car, index) => car.vin == '2modify');
          if(car.brand == "yugo"){
            car.brand = "WW";
          } else{
            car.brand = 'yugo';
          }

          var newCarsIds = ['http://www.google.com', '1leave', '2modify', 'added', counter];

          // Remove missing cars from the new set (oldCounter)
          let toRemove = local.cars.filter(car => !newCarsIds.some( newId => newId == car.vin));
          console.log("toRemove" + toRemove);
          
          toRemove.forEach(element => {
            // remove
            console.log('Removing: ' +element);
            var index = local.cars.indexOf(element, 0);
            if (index > -1) {
              local.cars.splice(index, 1);
            }
          });

          // Add new
          local.cars.push(new Car({vin: counter}));

          // added, removed wont be visible until we reassign array
          local.cars = Array.from(local.cars);

          local.start(counter);
        }, 5000);
      
    }

}
