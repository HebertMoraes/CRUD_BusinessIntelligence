import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-create-forms',
  templateUrl: './car-create-forms.component.html',
  styleUrls: ['./car-create-forms.component.sass']
})
export class CarCreateFormsComponent {
  formCreateCar!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService, 
    private carService: CarsService) {

    this.formCreateCar = this.gerateFormCreateCar();
  }

  ngOnInit() {
    
  }

  public gerateFormCreateCar(): FormGroup {
    return this.formBuilder.group({
      nameCar: ["", [Validators.required]],
      marcaCar: ["", [Validators.required]],
      year: ["", [Validators.required]],
      description: ["", [Validators.required]],
      valueMin: ["", [Validators.required]],
      valueAverage: ["", [Validators.required]],
      valueMax: ["", [Validators.required]],
      acquisitionDate: ["", [Validators.required]],
      imgUrl: ["", [Validators.required]],
    })
  }

  submitCreateCar() {
    const { nameCar, marcaCar, year, description, valueMin,
      valueAverage, valueMax, acquisitionDate, imgUrl } = this.formCreateCar.value;

    this.formCreateCar.reset;

    this.carService.createCar(nameCar, marcaCar, year, description, valueMin, valueAverage, 
      valueMax, acquisitionDate, imgUrl).subscribe((res) => {
      console.log(res);
    }); 
  }
}
