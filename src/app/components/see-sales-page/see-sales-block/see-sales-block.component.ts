import { Component } from '@angular/core';
import { Sale } from 'src/app/entities/sale';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-see-sales-block',
  templateUrl: './see-sales-block.component.html',
  styleUrls: ['./see-sales-block.component.sass']
})
export class SeeSalesBlockComponent {

  allSales!: Sale[];
  txtDescricaoSale!: string;

  constructor(private salesService: SalesService) {

  }

  ngOnInit() {
    this.salesService.getAll().subscribe((sales) => {
      this.allSales = sales;
    })
  }
}
