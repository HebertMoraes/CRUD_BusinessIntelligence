import { Component } from '@angular/core';
import { Car } from 'src/app/entities/car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-manage-cars-background-page',
  templateUrl: './manage-cars-background-page.component.html',
  styleUrls: ['./manage-cars-background-page.component.sass']
})
export class ManageCarsBackgroundPageComponent {
  carsToShow!: Car[];

  constructor(private carService: CarsService) {

  }

  ngOnInit() {
    this.carService.getAll().subscribe((cars) => {
      this.carsToShow = cars;
    });
  }

  deleteCar(id: number) {
    this.carsToShow.forEach(car => {
      if (car.Id === id) {
        this.carsToShow.splice(this.carsToShow.indexOf(car), 1);
      }
    });
    this.carService.deleteCar(id).subscribe();
  }
}
