import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Sale } from '../entities/sale';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

const urlBaseBackEnd = environment.urlBaseBackEnd;

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Sale[]>(urlBaseBackEnd + "GetAllSales", { responseType: 'json' }).pipe(
      catchError((err) => {
        console.log(err);
        throw 'Ops algo deu errado';
      })
    )
  }

  getById(Id: number) {
    return this.http.post<Sale>(urlBaseBackEnd + "GetOneSale", { Id }, { responseType: 'json' }).pipe(
      catchError((err) => {
        console.log(err);
        throw 'Ops algo deu errado';
      })
    )
  }

  createSale(
    NomeCarro: string,
    Descricao: string,
    Quantidade: number,
    NomeComprador: string,
    NomeVendedor: string,
    Valor: number,
    DataCriacao: string
  ) {
    return this.http.post(urlBaseBackEnd + "CreateSale",
      {
        NomeCarro,
        Descricao,
        Quantidade,
        NomeComprador,
        NomeVendedor,
        Valor,
        DataCriacao
      }, { responseType: 'json' }).pipe(
        catchError((err) => {
          console.log(err);
          throw 'Ops algo deu errado';
        })
      )
  }

  updateSale(
    Id: number, 
    NomeCarro: string,
    Descricao: string,
    Quantidade: number,
    NomeComprador: string,
    NomeVendedor: string,
    Valor: number,
    DataCriacao: string
  ) {
    return this.http.post(urlBaseBackEnd + "UpdateSale",
      {
        Id, 
        NomeCarro,
        Descricao,
        Quantidade,
        NomeComprador,
        NomeVendedor,
        Valor,
        DataCriacao
      }, { responseType: 'json' }).pipe(
        catchError((err) => {
          console.log(err);
          throw 'Ops algo deu errado';
        })
      )
  }

  deleteSale(Id: number) {
    return this.http.post<Sale>(urlBaseBackEnd + "DeleteSale", { Id }, { responseType: 'json' }).pipe(
      catchError((err) => {
        console.log(err);
        throw 'Ops algo deu errado';
      })
    )
  }
}
