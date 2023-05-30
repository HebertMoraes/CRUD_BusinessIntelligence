import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Sale } from 'src/app/entities/sale';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-update-sale-block',
  templateUrl: './update-sale-block.component.html',
  styleUrls: ['./update-sale-block.component.sass']
})
export class UpdateSaleBlockComponent {

  @Input() currentSaleOnUpdate!: Sale;

  @Output() completedUpdateSale: EventEmitter<any> = new EventEmitter<any>();

  formUpdateSale!: FormGroup;

  fieldNameCar!: HTMLInputElement;
  fieldQuantityCar!: HTMLInputElement;
  fieldDateCreation!: HTMLInputElement;
  fieldNameBuyer!: HTMLInputElement;
  fieldNameSeller!: HTMLInputElement;
  fieldDescription!: HTMLTextAreaElement;
  fieldTotalValue!: HTMLInputElement;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private salesService: SalesService, 
    private authService: AuthenticationService) {

    this.formUpdateSale = this.gerateFormUpdateSale();
  }

  ngOnInit() {
    this.fieldNameCar = document.getElementById('f-nome-carro') as HTMLInputElement;
    this.fieldQuantityCar = document.getElementById('f-quantidade-carro') as HTMLInputElement;
    this.fieldDateCreation = document.getElementById('f-data-criacao') as HTMLInputElement;
    this.fieldNameBuyer = document.getElementById('f-nome-comprador') as HTMLInputElement;
    this.fieldNameSeller = document.getElementById('f-nome-vendedor') as HTMLInputElement;
    this.fieldDescription = document.getElementById('f-descricao') as HTMLTextAreaElement;
    this.fieldTotalValue = document.getElementById('f-valor-total') as HTMLInputElement;
  }

  public gerateFormUpdateSale(): FormGroup {
    return this.formBuilder.group({
      nameCar: ["", [Validators.minLength(1)]],
      numberCars: ["", [Validators.minLength(1)]],
      dateCriation: ["", [Validators.minLength(1), Validators.required]],
      nameBuyer: ["", [Validators.minLength(1)]],
      nameSeller: ["", [Validators.minLength(1)]],
      descriptionSale: ["", [Validators.minLength(1)]],
      totalValueSale: ["", [Validators.minLength(1)]],
    })
  }

  submitUpdateSale() {
    if (this.formUpdateSale.valid) {
      this.formUpdateSale.reset;
      
      this.salesService.updateSale(
        this.currentSaleOnUpdate.Id,
        this.fieldNameCar.value,
        this.fieldDescription.value,
        Number(this.fieldQuantityCar.value),
        this.fieldNameBuyer.value,
        this.fieldNameSeller.value,
        Number(this.fieldTotalValue.value),
        this.fieldDateCreation.value
      ).subscribe({
        next: (res) => {
          this.toastr.success("Venda atualizada com sucesso!", undefined,
            { positionClass: 'toast-bottom-right' });
          this.completedUpdateSale.emit();
        },
        error: (err) => {
          console.log("3");
          if (err === "Token inválido") {
            console.log("4");
            this.authService.updateAcessToken().subscribe({
              complete: () => {
                console.log("6");
                this.salesService.updateSale(
                  this.currentSaleOnUpdate.Id,
                  this.fieldNameCar.value,
                  this.fieldDescription.value,
                  Number(this.fieldQuantityCar.value),
                  this.fieldNameBuyer.value,
                  this.fieldNameSeller.value,
                  Number(this.fieldTotalValue.value),
                  this.fieldDateCreation.value
                ).subscribe({
                  next: (res) => {
                    console.log("7");
                    this.toastr.success("Venda atualizada com sucesso!", undefined,
                      { positionClass: 'toast-bottom-right' });
                    this.completedUpdateSale.emit();
                  },
                  error: (err) => {
                    this.toastr.error("Ops! algo deu errado ao atualizar a venda, tente novamente",
                      undefined, { positionClass: 'toast-bottom-right' });
                  }
                });
              },
              error: (err) => {
                this.toastr.error("Ops! algo deu errado ao atualizar a venda, tente novamente",
                  undefined, { positionClass: 'toast-bottom-right' });
              }
            });
          } else {
            this.toastr.error("Ops! algo deu errado ao atualizar a venda, tente novamente",
              undefined, { positionClass: 'toast-bottom-right' });
          }
        }
      });
    } else {
      this.toastr.warning("Preencha todos os campos", undefined, { positionClass: 'toast-bottom-right' });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['currentSaleOnUpdate'].firstChange) {
      this.fieldNameCar.value = changes['currentSaleOnUpdate'].currentValue.NomeCarro;
      this.fieldQuantityCar.value = changes['currentSaleOnUpdate'].currentValue.Quantidade;
      //data não funciona, está passando o formado Date, mas o formato do input é dd/mm/aaaa apenas
      this.fieldDateCreation.value = changes['currentSaleOnUpdate'].currentValue.DataCriacao;
      this.fieldNameBuyer.value = changes['currentSaleOnUpdate'].currentValue.NomeComprador;
      this.fieldNameSeller.value = changes['currentSaleOnUpdate'].currentValue.NomeVendedor;
      this.fieldDescription.value = changes['currentSaleOnUpdate'].currentValue.Descricao;
      this.fieldTotalValue.value = changes['currentSaleOnUpdate'].currentValue.Valor;
    }
  }

  verifyInputNumber(event: KeyboardEvent) {
    if (event.key === "-" || event.key === "+" || event.key === "e" || event.key === "," || event.key === ".") {
      event.preventDefault();
    }
  }
}
