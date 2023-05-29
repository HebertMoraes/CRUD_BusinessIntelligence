import { Component } from '@angular/core';
import { Car } from 'src/app/entities/car';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-cars-background-page',
  templateUrl: './cars-background-page.component.html',
  styleUrls: ['./cars-background-page.component.sass']
})
export class CarsBackgroundPageComponent {
  carsToShow!: Car[];

  constructor(private carService: CarsService, private authService: AuthenticationService) {

  }

  ngOnInit() {
    this.carService.getAll().subscribe({
      next: (cars) => {
        this.carsToShow = cars;
      },
      error: (err) => {
        console.log("3");
        if (err === "Token inválido") {
          console.log("4");
          this.authService.updateAcessToken().subscribe({
            complete: () => {
              console.log("6");
              this.carService.getAll().subscribe({
                next: (cars) => {
                  console.log("7");
                  this.carsToShow = cars;
                }
              });
            },
          });
        }
      }
    });
  }
}
