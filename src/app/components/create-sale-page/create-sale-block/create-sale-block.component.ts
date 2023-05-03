import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-sale-block',
  templateUrl: './create-sale-block.component.html',
  styleUrls: ['./create-sale-block.component.sass']
})
export class CreateSaleBlockComponent {

  formCreateSale!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService) {

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
    const { nameCar, numberCars, dateCriation, nameBuyer, nameSeller,
      descriptionSale, totalValueSale } = this.formCreateSale.value;

    this.formCreateSale.reset;

    console.log(this.formCreateSale);
  }
}
