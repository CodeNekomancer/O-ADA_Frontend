import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASEURL = environment.baseUrl;
  private authEndpoint = 'adacc/';
  constructor(private _http:HttpClient) { }
  login(user:any):Observable<any>{
    return this._http.post(`${this.BASEURL}${this.authEndpoint}login`, JSON.stringify(user))
  } 
  register(user:any):Observable<any>{
    return this._http.post(`${this.BASEURL}${this.authEndpoint}add`, JSON.stringify(user))
  }
}
