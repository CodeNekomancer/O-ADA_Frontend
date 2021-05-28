import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UaccService {
  private Base_URL = environment.baseUrl;
  private endpoint = 'uacc/';
  
  constructor(private _http:HttpClient) { }

  get(uacId:number):Observable<any>{
    return this._http.get<any>(`${this.Base_URL}${this.endpoint}get/sng/${uacId}`);
  }

  /*
  getCelestialBodies(uacId:number):Observable<any>{
    return this._http.get<any>(`${this.Base_URL}${this.endpoint}get/sng/${uacId}`);
  }
  */
}
