import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/entities/car';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-manage-cars-background-page',
  templateUrl: './manage-cars-background-page.component.html',
  styleUrls: ['./manage-cars-background-page.component.sass']
})
export class ManageCarsBackgroundPageComponent {
  carsToShow!: Car[];

  modalCreateCar!: any;

  constructor(
    private carService: CarsService, 
    private toastr: ToastrService, 
    private authService: AuthenticationService) {

  }

  ngOnInit() {
    this.refreshAllCarsList();
    this.modalCreateCar = document.getElementById("modalCreateCar");
  }

  refreshAllCarsList() {
    this.carService.getAll().subscribe({
      next: (cars) => {
        if (cars) {
          this.carsToShow = cars;
        }
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
                  if (cars) {
                    this.carsToShow = cars;
                  }
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

  deleteCar(id: number) {
    this.carsToShow.forEach(car => {
      if (car.Id === id) {
        this.carsToShow.splice(this.carsToShow.indexOf(car), 1);
      }
    });
    
    this.carService.deleteCar(id).subscribe({
      next: (res) => {
        this.toastr.warning("Carro deletado", undefined, { positionClass: 'toast-bottom-right' });
      },
      error: (err) => {
        console.log("3");
        if (err === "Token inválido") {
          console.log("4");
          this.authService.updateAcessToken().subscribe({
            complete: () => {
              console.log("6");
              this.carService.deleteCar(id).subscribe({
                next: (res) => {
                  this.toastr.warning("Carro deletado", undefined, { positionClass: 'toast-bottom-right' });
                },
                error: (err) => {
                  this.toastr.error("Ops! algo deu errado ao deletar o carro, tente novamente", undefined, 
                    { positionClass: 'toast-bottom-right' });
                }
              });
            },
            error: (err) => {
              this.toastr.error("Ops! algo deu errado ao deletar o carro, tente novamente", undefined, 
                { positionClass: 'toast-bottom-right' });
            }
          });
        } else {
          this.toastr.error("Ops! algo deu errado ao deletar o carro, tente novamente", undefined, 
            { positionClass: 'toast-bottom-right' });
        }
      }
    });
  }

  closeModalCreateCar() {
    this.modalCreateCar.style.display = "none";
    this.modalCreateCar.classList.remove("show");
    document.getElementsByClassName("modal-backdrop")[0].outerHTML = " ";
    document.body.style.removeProperty("overflow");
    document.body.style.removeProperty("padding-right");
    document.body.classList.remove("modal-open");
    this.refreshAllCarsList();
  }
}
