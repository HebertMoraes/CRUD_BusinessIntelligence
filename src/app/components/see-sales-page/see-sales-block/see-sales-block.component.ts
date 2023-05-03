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
  currentSaleOnUpdate!: Sale;

  constructor(private salesService: SalesService) {

  }

  ngOnInit() {
    this.salesService.getAll().subscribe((sales) => {
      this.allSales = sales;
    })
  }

  deleteSale(sale: Sale) {
    var indiceToRemove = this.allSales.indexOf(sale);
    this.allSales.splice(indiceToRemove, 1);
    this.salesService.deleteSale(sale.Id).subscribe();
  }
}
