import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Sale } from 'src/app/entities/sale';
import { AuthenticationService } from 'src/app/services/authentication.service';
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

  modalUpdateSale!: any;

  constructor(
    private salesService: SalesService,
    private toastr: ToastrService,
    private authService: AuthenticationService) {

  }

  ngOnInit() {
    this.refreshAllSalesList();
    this.modalUpdateSale = document.getElementById("modalUpdateSale");
  }

  refreshAllSalesList() {
    this.salesService.getAll().subscribe({
      next: (sales) => {
        this.allSales = sales;
      },
      error: (err) => {
        console.log("3");
        if (err === "Token inválido") {
          console.log("4");
          this.authService.updateAcessToken().subscribe({
            complete: () => {
              console.log("6");
              this.salesService.getAll().subscribe({
                next: (sales) => {
                  console.log("7");
                  this.allSales = sales;
                },
                error: (err) => {
                  this.toastr.error("Ops! algo deu errado ao listar as vendas, tente novamente", undefined, 
                    { positionClass: 'toast-bottom-right' });
                }
              });
            },
            error: (err) => {
              this.toastr.error("Ops! algo deu errado ao listar as vendas, tente novamente", undefined, 
                { positionClass: 'toast-bottom-right' });
            }
          });
        } else {
          this.toastr.error("Ops! algo deu errado ao listar as vendas, tente novamente", undefined, 
            { positionClass: 'toast-bottom-right' });
        }
      }
    });
  }

  deleteSale(sale: Sale) {
    var indiceToRemove = this.allSales.indexOf(sale);
    this.allSales.splice(indiceToRemove, 1);

    this.salesService.deleteSale(sale.Id).subscribe({
      next: (res) => {
        this.toastr.warning("Venda deletada", undefined, { positionClass: 'toast-bottom-right' });
      },
      error: (err) => {
        console.log("3");
        if (err === "Token inválido") {
          console.log("4");
          this.authService.updateAcessToken().subscribe({
            complete: () => {
              console.log("6");
              this.salesService.deleteSale(sale.Id).subscribe({
                next: (sales) => {
                  console.log("7");
                  this.toastr.warning("Venda deletada", undefined, { positionClass: 'toast-bottom-right' });
                },
                error: (err) => {
                  this.toastr.error("Algo deu errado ao deletar a venda, tente novamente",
                    undefined, { positionClass: 'toast-bottom-right' });
                }
              });
            },
            error: (err) => {
              this.toastr.error("Algo deu errado ao deletar a venda, tente novamente",
                undefined, { positionClass: 'toast-bottom-right' });
            }
          });
        } else {
          this.toastr.error("Algo deu errado ao deletar a venda, tente novamente",
            undefined, { positionClass: 'toast-bottom-right' });
        }
      }
    });
  }

  closeModalUpdateSale() {
    this.modalUpdateSale.style.display = "none";
    this.modalUpdateSale.classList.remove("show");
    document.getElementsByClassName("modal-backdrop")[0].outerHTML = " ";
    document.body.style.removeProperty("overflow");
    document.body.style.removeProperty("padding-right");
    document.body.classList.remove("modal-open");
    this.refreshAllSalesList();
  }
}
