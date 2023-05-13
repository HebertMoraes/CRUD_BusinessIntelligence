import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private salesService: SalesService, private toastr: ToastrService) {

  }

  ngOnInit() {
    this.salesService.getAll().subscribe((sales) => {
      this.allSales = sales;
    })
  }

  deleteSale(sale: Sale) {
    var indiceToRemove = this.allSales.indexOf(sale);
    this.allSales.splice(indiceToRemove, 1);
    this.salesService.deleteSale(sale.Id).subscribe({
      next: (res) => {
        this.toastr.warning("Venda deletada", undefined, { positionClass: 'toast-bottom-right' });
      }, 
      error: (err) => {
        this.toastr.error("Algo deu errado ao deletar a venda, tente novamente", undefined, { positionClass: 'toast-bottom-right' });
      }
    });
  }
}
