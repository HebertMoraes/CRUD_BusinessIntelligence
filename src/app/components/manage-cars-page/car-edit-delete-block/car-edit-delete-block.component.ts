import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from 'src/app/entities/car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-edit-delete-block',
  templateUrl: './car-edit-delete-block.component.html',
  styleUrls: ['./car-edit-delete-block.component.sass']
})
export class CarEditDeleteBlockComponent {
  @Input() id!: number;
  @Input() defaultImage!: string;
  @Input() image!: string;
  @Input() name!: string;
  @Input() marca!: string;
  @Input() year!: number;
  @Input() valueMin!: number;
  @Input() value!: number;
  @Input() valueMax!: number;
  @Input() description!: string;

  @Output() updateClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteClick: EventEmitter<number> = new EventEmitter<number>();

  selfCar!: Car;
  currentCarToUpdate!: Car;

  ngOnInit() {
    this.selfCar = new Car(this.id, this.name, this.marca, this.year, this.description, 
      this.valueMin, this.value, this.valueMax, this.image);
  }

  // setCarToUpdate() {
  //   console.log("setCarToUpdate setando");
  //   this.currentCarToUpdate = new Car(this.id, this.name, this.marca, this.year, this.description, 
  //     this.valueMin, this.value, this.valueMax, this.image);
  // }
}
