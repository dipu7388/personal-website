import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Constants } from '../common/constants';
import { MatSnackBar } from '@angular/material';

@Injectable({providedIn: 'root'})
export class InterceptorService implements HttpInterceptor {
  constructor(private router: Router,
    private snackbar: MatSnackBar
    ) { }
  private token: string = '';
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    }
    const authReq = req.clone({
      headers: req.headers.set('Authorization', this.token)
    });

    return next.handle(authReq).pipe(tap(
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err instanceof HttpErrorResponse) {
            if (err.status == 401) {
              this.router.navigate(['PageNotFoundComponent'], { queryParams : {type: '401'} });
            }
            if (err.status == 0) {
              this.snackbar.open('Host Unreachable', '', {duration: Constants.SANCKBAR_DURATION});
            }
          }
        }
      }
    ))
  }
}
