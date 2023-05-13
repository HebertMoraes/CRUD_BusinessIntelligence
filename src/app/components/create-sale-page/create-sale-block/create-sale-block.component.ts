import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-create-sale-block',
  templateUrl: './create-sale-block.component.html',
  styleUrls: ['./create-sale-block.component.sass']
})
export class CreateSaleBlockComponent {

  formCreateSale!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private salesService: SalesService) {

    this.formCreateSale = this.gerateFormCreateSale();
  }

  ngOnInit() {

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
          this.toastr.success("Cadastrado venda com sucesso!", undefined, { positionClass: 'toast-bottom-right' });
        }, 
        error: (err) => {
          this.toastr.error("Ops! algo deu errado ao criar venda, tente novamente", undefined, { positionClass: 'toast-bottom-right' });
        }
      });

    } else {
      this.toastr.warning("Preencha todos os campos", undefined, { positionClass: 'toast-bottom-right' });
    }
  }
}
