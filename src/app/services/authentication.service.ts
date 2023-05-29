import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators'
import { Observable, firstValueFrom } from 'rxjs'
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  public signInWithEmailPassword(email: string, password: string): Observable<any> {

    const url = environment.urlAuthServer;

    return this.http.post(url, { email, password }, { responseType: 'json' }).pipe(
      map((dataResponse) => {
        this.setTokenLocalStorage(dataResponse);
      }),
      catchError((err: HttpErrorResponse) => {
        this.removeAcessTokenLocalStorage();

        if (err.status == 401) {
          throw "Verifique seu login."
        }
        if (err.status == 500) {
          throw 'Login não autorizado.';
        }
        throw 'Falha ao efetuar login.';
      })
    );
  };

  public updateAcessToken() {
    const url = environment.urlAuthServerRefresh;
    const refresh_token = this.getRefreshToken();

    return this.http.post(url, { refresh_token }, { responseType: 'json' }).pipe(
      map((dataResponse) => {
        console.log("5");
        this.setUpdatedAcessTokenLocalStorage(dataResponse);
      }), 
      catchError((err: HttpErrorResponse) => {
        console.log("alou alou");
        //Se retornou erro 498, significa que até o refresh_token está expirado

        this.removeAcessTokenLocalStorage();
        this.removeRefreshTokenLocalStorage();
        throw 'Falha ao efetuar a requisição.';
      })
    );
  }

  // public async updateAcessToken() {
  //   const url = environment.urlAuthServerRefresh;
  //   const refresh_token = this.getRefreshToken();

  //   return await this.http.post(url, { refresh_token }, { responseType: 'json' }).pipe(
  //     map(async (dataResponse) => {
  //       console.log("2");
  //       await new Promise((resolve, reject) => {
  //         this.setUpdatedAcessTokenLocalStorage(dataResponse);
  //         console.log("3");
  //         resolve("tetris");
  //       });
  //       console.log("4");
  //     }), 
  //     catchError((err: HttpErrorResponse) => {
  //       console.log("alou alou");
  //       //Se retornou erro 498, significa que até o refresh_token está expirado

  //       this.removeAcessTokenLocalStorage();
  //       this.removeRefreshTokenLocalStorage();
  //       throw 'Falha ao efetuar a requisição.';
  //     })
  //   ).subscribe(() => { console.log("subscribe da requisição post do updateAcessToken") });
  // }

  public getAcessToken(): string | null {
    return localStorage.getItem("access_token");
  }

  public getRefreshToken(): string | null {
    return localStorage.getItem("refresh_token");
  }

  private setTokenLocalStorage(dataResponse: any): void {
    const { access_token, refresh_token, firebase_token } = dataResponse;
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);
  }

  private setUpdatedAcessTokenLocalStorage(dataResponse: any): void {
    const { access_token, refresh_token, firebase_token } = dataResponse;
    localStorage.setItem("access_token", access_token);
  }

  private removeAcessTokenLocalStorage(): void {
    localStorage.removeItem("access_token");
  }

  private removeRefreshTokenLocalStorage(): void {
    localStorage.removeItem("access_token");
  }
}
