import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASEURL = environment.baseUrl;
  private authEndpoint = 'auth/login';
  private registerEndpoint = 'ADAcc/add';
  constructor(private _http:HttpClient) { }
  login(user:any):Observable<any>{
    return this._http.post(`${this.BASEURL}${this.authEndpoint}`, JSON.stringify(user))
  } 
  register(){

  }
}
