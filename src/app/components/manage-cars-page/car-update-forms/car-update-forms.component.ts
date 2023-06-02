import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/entities/car';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-update-forms',
  templateUrl: './car-update-forms.component.html',
  styleUrls: ['./car-update-forms.component.sass']
})
export class CarUpdateFormsComponent {

  @Input() carToUpdate!: Car;

  @Output() completedUpdateCar: EventEmitter<any> = new EventEmitter<any>();

  formUpdateCar!: FormGroup;

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
    private carService: CarsService, 
    private authService: AuthenticationService) {

    this.formUpdateCar = this.gerateFormCreateCar();
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.fieldNameCar = document.getElementById('f-nome-carro' + this.carToUpdate.Id) as HTMLInputElement;
    this.fieldMarcaCar = document.getElementById('f-marca-carro' + this.carToUpdate.Id) as HTMLInputElement;
    this.fieldYearCar = document.getElementById('f-year-car' + this.carToUpdate.Id) as HTMLInputElement;
    this.fieldValueMin = document.getElementById('f-value-min-car' + this.carToUpdate.Id) as HTMLInputElement;
    this.fieldValueMax = document.getElementById('f-value-max-car' + this.carToUpdate.Id) as HTMLInputElement;
    this.fieldDescription = document.getElementById('f-description-car' + this.carToUpdate.Id) as HTMLTextAreaElement;
    this.fieldImgUrl = document.getElementById('f-img-url' + this.carToUpdate.Id) as HTMLInputElement;
    this.fieldValueMedia = document.getElementById('f-value-average-car' + this.carToUpdate.Id) as HTMLInputElement;
    this.fieldDateAcquisition = document.getElementById('f-acquisition-date-car' + this.carToUpdate.Id) as HTMLInputElement;

    this.fieldNameCar.value = this.carToUpdate.Nome;
    this.fieldMarcaCar.value = this.carToUpdate.Marca;
    this.fieldYearCar.value = this.carToUpdate.Ano.toString();
    this.fieldValueMin.value = this.carToUpdate.ValorMin.toString();
    this.fieldValueMax.value = this.carToUpdate.ValorMax.toString();
    this.fieldDescription.value = this.carToUpdate.Descricao;
    this.fieldImgUrl.value = this.carToUpdate.ImgUrl;
    this.fieldValueMedia.value = this.carToUpdate.ValorMedia.toString();
    //Por conta do mesmo motivo do UpdateSales não funcionar em alterar a Data de Criação, 
    //o campo de Data de aquisição também não funcionaria, portanto, nem passei o dado de 
    //'DataCriacao', então, vai ficar sem os dados nesse campo ao alterar.
    // this.fieldDateAcquisition.value = this.carToUpdate.DataCriacao;
  }

  public gerateFormCreateCar(): FormGroup {
    return this.formBuilder.group({
      nameCar: ["", [Validators.minLength(1)]],
      marcaCar: ["", [Validators.minLength(1)]],
      year: ["", [Validators.minLength(1)]],
      description: ["", [Validators.minLength(1)]],
      valueMin: ["", [Validators.minLength(1)]],
      valueAverage: ["", [Validators.minLength(1)]],
      valueMax: ["", [Validators.minLength(1)]],
      acquisitionDate: ["", [Validators.minLength(1)]],
      imgUrl: ["", [Validators.minLength(1)]],
    })
  }

  submitUpdateCar() {

    if (this.formUpdateCar.valid) {
      this.formUpdateCar.reset;

      this.carService.updateCar(
        this.carToUpdate.Id,
        this.fieldNameCar.value,
        this.fieldMarcaCar.value,
        Number(this.fieldYearCar.value),
        this.fieldDescription.value,
        Number(this.fieldValueMin.value),
        Number(this.fieldValueMedia.value),
        Number(this.fieldValueMax.value),
        this.fieldDateAcquisition.value,
        this.fieldImgUrl.value
      ).subscribe({
        next: (res) => {
          this.toastr.success("Carro atualizado com sucesso!", undefined, 
            { positionClass: 'toast-bottom-right' });
          this.completedUpdateCar.emit();
        },
        error: (err) => {
          console.log("3");
          if (err === "Token inválido") {
            console.log("4");
            this.authService.updateAcessToken().subscribe({
              complete: () => {
                console.log("6");
                this.carService.updateCar(
                  this.carToUpdate.Id,
                  this.fieldNameCar.value,
                  this.fieldMarcaCar.value,
                  Number(this.fieldYearCar.value),
                  this.fieldDescription.value,
                  Number(this.fieldValueMin.value),
                  Number(this.fieldValueMedia.value),
                  Number(this.fieldValueMax.value),
                  this.fieldDateAcquisition.value,
                  this.fieldImgUrl.value
                ).subscribe({
                  next: (res) => {
                    console.log("7");
                    this.toastr.success("Carro atualizado com sucesso!", undefined, 
                      { positionClass: 'toast-bottom-right' });
                    this.completedUpdateCar.emit();
                  },
                  error: (err) => {
                    this.toastr.error("Ops! algo deu errado ao atualizar o carro, tente novamente",
                      undefined, { positionClass: 'toast-bottom-right' });
                  }
                });
              },
              error: (err) => {
                this.toastr.error("Ops! algo deu errado ao atualizar o carro, tente novamente",
                  undefined, { positionClass: 'toast-bottom-right' });
              }
            });
          } else {
            this.toastr.error("Ops! algo deu errado ao atualizar o carro, tente novamente",
              undefined, { positionClass: 'toast-bottom-right' });
          }
        }
      });
    } else {
      this.toastr.warning("Preencha todos os campos", undefined, { positionClass: 'toast-bottom-right' });
    }
  }

  verifyInputNumber(event: KeyboardEvent) {
    if (event.key === "-" || event.key === "+" || event.key === "e" || event.key === "," || event.key === ".") {
      event.preventDefault();
    }
  }
}
