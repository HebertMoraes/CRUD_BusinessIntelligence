import { Component } from '@angular/core';
import { Car } from 'src/app/entities/car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-cars-background-page',
  templateUrl: './cars-background-page.component.html',
  styleUrls: ['./cars-background-page.component.sass']
})
export class CarsBackgroundPageComponent {
  carsToShow!: Car[];

  constructor(private carService: CarsService) {

  }

  ngOnInit() {
    this.carService.getAll().subscribe((cars) => {
      this.carsToShow = cars;
    });
  }
}
