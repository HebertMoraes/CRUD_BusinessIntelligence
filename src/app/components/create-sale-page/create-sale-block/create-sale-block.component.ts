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
    // this.salesService.updateSale(
    //   15,
    //   "alteradoo", 
    //   "alteradoo", 
    //   12, 
    //   "alteradoo", 
    //   "alteradoo", 
    //   5.5, 
    //   "05/03/2023"
    // ).subscribe((res) => {
    //   console.log(res);
    // }); 
    this.salesService.deleteSale(17).subscribe((res) => {
      console.log(res);
    })
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
