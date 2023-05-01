import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { AllDesignData } from '../entities/all-design-data';

@Injectable({
  providedIn: 'root'
})
export class DesignService {

  constructor(private http: HttpClient) {

  }

  getAllDesign(
    totalPerPage?: number,
    orderBy?: 'title' | 'created_at',
    orderOrientation?: string) {

    //?total_per_page=10&order_by=title&order_orientation=desc
    var urlToSend = environment.urlGetAllDesign + "?";
    if (totalPerPage) {
      urlToSend += "total_per_page=" + totalPerPage;
    }
    if (orderBy) {
      urlToSend += "&order_by=" + orderBy;
    }
    if (orderOrientation) {
      urlToSend += "&order_orientation=" + orderOrientation;
    }

    return this.http.get<AllDesignData>(urlToSend, { responseType: 'json' }).pipe(
      catchError((err) => {
        console.log(err);
        throw 'Ops algo deu errado';
      })
    )
  }
}
