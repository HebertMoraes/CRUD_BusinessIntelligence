import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthenticationService } from "src/app/services/authentication.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthenticationService
    ) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const myAcessToken = this.authService.getAcessToken();

        if(myAcessToken !== null) {
            
            const authRequest = req.clone({
                setHeaders: 
                {
                    'Authorization': `Bearer ${myAcessToken}`
                }
            });
            
            return next.handle(authRequest);
        } else {
            return next.handle(req);
        }
    }
}