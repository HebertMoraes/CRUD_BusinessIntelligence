import { Injectable } from '@angular/core';
import { Car } from '../entities/car';
import { catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

const urlBaseBackEnd = environment.urlBaseBackEnd;

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
}
