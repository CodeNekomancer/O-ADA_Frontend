import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //check token
    const token = localStorage.getItem('oada-auth');
    

    //get request
    const request = req.clone({
      headers: req.headers.set('Content-Type','application/json')
    })
    
    //return if null, undefined
    if(!token){
      return next.handle(request);
    }

    //add token
    request.headers.append('Authorization',`Bearer ${token}`);
    
    //send request
    return next.handle(request)
  }
}
