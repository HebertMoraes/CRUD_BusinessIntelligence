import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/entities/car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-update-forms',
  templateUrl: './car-update-forms.component.html',
  styleUrls: ['./car-update-forms.component.sass']
})
export class CarUpdateFormsComponent {

  @Input() carToUpdate!: Car;

  formCreateCar!: FormGroup;

  fieldNameCar!: HTMLInputElement;
  fieldMarcaCar!: HTMLInputElement;
  fieldYearCar!: HTMLInputElement;
  fieldValueMin!: HTMLInputElement;
  fieldValueMax!: HTMLInputElement;
  fieldDescription!: HTMLTextAreaElement;
  fieldImgUrl!: HTMLInputElement;
  fieldValueMedia!: HTMLInputElement;
  fieldDateAcquisition!: HTMLInputElement;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService, 
    private carService: CarsService) {

    this.formCreateCar = this.gerateFormCreateCar();
  }

  ngOnInit() {
    this.fieldNameCar = document.getElementById('f-nome-carro') as HTMLInputElement; 
    this.fieldMarcaCar = document.getElementById('f-marca-carro') as HTMLInputElement; 
    this.fieldYearCar = document.getElementById('f-year-car') as HTMLInputElement; 
    this.fieldValueMin = document.getElementById('f-value-min-car') as HTMLInputElement; 
    this.fieldValueMax = document.getElementById('f-value-max-car') as HTMLInputElement; 
    this.fieldDescription = document.getElementById('f-description-car') as HTMLTextAreaElement; 
    this.fieldImgUrl = document.getElementById('f-img-url') as HTMLInputElement; 
    this.fieldValueMedia = document.getElementById('f-value-average-car') as HTMLInputElement; 
    this.fieldDateAcquisition = document.getElementById('f-acquisition-date-car') as HTMLInputElement; 
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

  ngOnChanges(changes: SimpleChanges) {
    if(!changes['carToUpdate'].firstChange) {
      console.log(changes);
      this.fieldNameCar.value = changes['carToUpdate'].currentValue.Nome;
      this.fieldMarcaCar.value = changes['carToUpdate'].currentValue.Marca;
      this.fieldYearCar.value = changes['carToUpdate'].currentValue.Ano;
      this.fieldValueMin.value = changes['carToUpdate'].currentValue.ValorMin;
      this.fieldValueMax.value = changes['carToUpdate'].currentValue.ValorMax;
      this.fieldDescription.value = changes['carToUpdate'].currentValue.Descricao;
      this.fieldImgUrl.value = changes['carToUpdate'].currentValue.Imgurl;
      this.fieldValueMedia.value = changes['carToUpdate'].currentValue.ValorMedia;
      //Por conta do mesmo motivo do UpdateSales não funcionar em alterar a Data de Criação, 
      //o campo de Data de aquisição também não funcionaria, portanto, nem passei o dado de 
      //'DataCriacao', então, vai ficar sem os dados nesse campo ao alterar.
      // this.fieldDateAcquisition.value = changes['carToUpdate'].currentValue.DataCriacao;
    }
  }
}
