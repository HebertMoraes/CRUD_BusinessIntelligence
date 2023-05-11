import { Injectable } from '@angular/core';
import { Car } from '../entities/car';
import { catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

const urlBaseBackEnd = environment.urlBaseAppBackEnd;

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { 

  }

  getAll() {
    return this.http.get<Car[]>(urlBaseBackEnd + "GetAllCars", { responseType: 'json' }).pipe(
      catchError((err) => {
        console.log(err);
        throw 'Ops algo deu errado';
      })
    )
  }

  createCar(
    Nome: string, 
    Marca: string, 
    Ano: number, 
    Descricao: string, 
    ValorMin: number, 
    ValorMedia: number, 
    ValorMax: number, 
    DataCriacao: string, 
    ImgUrl: string
  ) {
    return this.http.post<Car>(urlBaseBackEnd + "CreateCar", {
      Nome, 
      Marca,
      Ano, 
      Descricao, 
      ValorMin, 
      ValorMedia, 
      ValorMax, 
      DataCriacao, 
      ImgUrl
    }, { responseType: 'json' }).pipe(
      catchError((err) => {
        console.log(err);
        throw 'Ops algo deu errado';
      })
    )
  }

  updateCar(
    Id: number, 
    Nome: string, 
    Marca: string, 
    Ano: number, 
    Descricao: string, 
    ValorMin: number, 
    ValorMedia: number, 
    valorMax: number,
    DataCriacao: string, 
    Imgurl: string
  ) {
    return this.http.post<Car>(urlBaseBackEnd + "UpdateCar",
      {
        Id, 
        Nome,
        Marca,
        Ano,
        Descricao,
        ValorMin,
        ValorMedia,
        valorMax, 
        DataCriacao, 
        Imgurl
      }, { responseType: 'json' }).pipe(
        catchError((err) => {
          console.log(err);
          throw 'Ops algo deu errado';
        })
      )
  }

  deleteCar(Id: number) {
    return this.http.post<Car>(urlBaseBackEnd + "DeleteCar", { Id }, { responseType: 'json' }).pipe(
      catchError((err) => {
        console.log(err);
        throw 'Ops algo deu errado';
      })
    )
  }
}
