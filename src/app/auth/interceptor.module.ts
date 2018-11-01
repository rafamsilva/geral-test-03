import { Injectable, NgModule } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor {
  private token: string;
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
    ): Observable<HttpEvent<any>> {
      this.token = sessionStorage.getItem('token');
      const headers = new HttpHeaders({
        'x-access-token': this.token || '',
        'Content-Type': 'application/json'
      });
      const cloneReq = req.clone({headers});
      return next.handle(cloneReq).pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            if(event && event.body && event.body.token){
              sessionStorage.setItem('token',event.body.token)
            }
          }
        }, error => {
          // http response status
        })
        )
      }
    }


    @NgModule({
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpsRequestInterceptor,
          multi: true,
        },
      ],
    })


    export class Interceptor {}
