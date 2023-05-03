import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Sale } from 'src/app/entities/sale';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-update-sale-block',
  templateUrl: './update-sale-block.component.html',
  styleUrls: ['./update-sale-block.component.sass']
})
export class UpdateSaleBlockComponent {

  @Input() currentSaleOnUpdate!: Sale;
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
    private salesService: SalesService) {

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
      nameCar: ["", [Validators.required]],
      numberCars: ["", [Validators.required]],
      dateCriation: ["", [Validators.required]],
      nameBuyer: ["", [Validators.required]],
      nameSeller: ["", [Validators.required]],
      descriptionSale: ["", [Validators.required]],
      totalValueSale: ["", [Validators.required]],
    })
  }

  submitUpdateSale() {
    const { nameCar, numberCars, dateCriation, nameBuyer, nameSeller,
      descriptionSale, totalValueSale } = this.formUpdateSale.value;

    this.formUpdateSale.reset;

    this.salesService.updateSale(
      this.currentSaleOnUpdate.Id,
      nameCar, 
      descriptionSale, 
      numberCars, 
      nameBuyer, 
      nameSeller, 
      totalValueSale, 
      dateCriation
    ).subscribe((res) => {
      console.log(res);
    }); 
  }

  ngOnChanges(changes: SimpleChanges) {
    if(!changes['currentSaleOnUpdate'].firstChange) {
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
}
