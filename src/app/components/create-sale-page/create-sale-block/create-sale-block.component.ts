import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/entities/car';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CarsService } from 'src/app/services/cars.service';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-create-sale-block',
  templateUrl: './create-sale-block.component.html',
  styleUrls: ['./create-sale-block.component.sass']
})
export class CreateSaleBlockComponent {

  formCreateSale!: FormGroup;
  carsToSell!: Car[];

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private salesService: SalesService, 
    private authService: AuthenticationService, 
    private carService: CarsService) {

    this.formCreateSale = this.gerateFormCreateSale();
  }

  ngOnInit() {
    this.carService.getAll().subscribe({
      next: (cars) => {
        this.carsToSell = cars;
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
                  this.carsToSell = cars;
                },
                error: (err) => {
                  this.toastr.error("Ops! algo deu errado ao listar os carros, tente novamente", undefined, 
                    { positionClass: 'toast-bottom-right' });
                }
              });
            },
            error: (err) => {
              this.toastr.error("Ops! algo deu errado ao listar os carros, tente novamente", undefined, 
                { positionClass: 'toast-bottom-right' });
            }
          });
        } else {
          this.toastr.error("Ops! algo deu errado ao listar os carros, tente novamente", undefined, 
            { positionClass: 'toast-bottom-right' });
        }
      }
    });
  }

  public gerateFormCreateSale(): FormGroup {
    return this.formBuilder.group({
      nameCar: ["", [Validators.required]],
      numberCars: ["", [Validators.required]],
      dateCriation: ["", [Validators.required]],
      nameBuyer: ["", [Validators.required]],
      nameSeller: ["", [Validators.required]],
      descriptionSale: ["", [Validators.required]],
      totalValueSale: ["", [Validators.required]],
    })
  }

  submitCreateSale() {
    if (this.formCreateSale.valid) {
      const { nameCar, numberCars, dateCriation, nameBuyer, nameSeller,
        descriptionSale, totalValueSale } = this.formCreateSale.value;
      this.formCreateSale.reset;

      this.salesService.createSale(
        nameCar,
        descriptionSale,
        numberCars,
        nameBuyer,
        nameSeller,
        totalValueSale,
        dateCriation
      ).subscribe({
        //complete
        next: (res) => {
          console.log("sucesso facil");
          this.toastr.success("Cadastrado venda com sucesso!", undefined, 
            { positionClass: 'toast-bottom-right' });
        },
        error: (err) => { 
          console.log("3");
          if (err === "Token inválido") {
            console.log("4");
            this.authService.updateAcessToken().subscribe({
              complete: () => {
                console.log("6");
                this.salesService.createSale(
                  nameCar,
                  descriptionSale,
                  numberCars,
                  nameBuyer,
                  nameSeller,
                  totalValueSale,
                  dateCriation
                ).subscribe({
                  next: (res) => {
                    console.log("7");
                    this.toastr.success("Cadastrado venda com sucesso!", undefined, 
                      { positionClass: 'toast-bottom-right' });
                  },
                  error: (err) => {
                    console.log(err);
                    this.toastr.error("Ops! algo deu errado ao criar venda, tente novamente", undefined, 
                      { positionClass: 'toast-bottom-right' });
                  }
                })
              },
              error: (err) => {
                console.log(err);
                this.toastr.error("Ops! algo deu errado ao criar venda, tente novamente", undefined, 
                  { positionClass: 'toast-bottom-right' });
              }
            });
          } else {
            this.toastr.error("Ops! algo deu errado ao criar venda, tente novamente", undefined, 
              { positionClass: 'toast-bottom-right' });
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
