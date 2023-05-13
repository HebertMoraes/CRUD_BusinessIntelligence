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

  modalUpdate!: any;

  constructor(private salesService: SalesService, private toastr: ToastrService) {

  }

  ngOnInit() {
    this.salesService.getAll().subscribe((sales) => {
      this.allSales = sales;
    });
    this.modalUpdate = document.getElementById("modalUpdate");
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

  closeModalUpdate() {

    //ainda não finalizado

    this.modalUpdate.style.display = "none";
    this.modalUpdate.classList.remove("show");
    document.getElementsByClassName("modal-backdrop")[0].outerHTML = " ";
    document.body.style.removeProperty("overflow");
    document.body.style.removeProperty("padding-right");
    document.body.classList.remove("modal-open");
    // !.style.display = "none";
  }
}
