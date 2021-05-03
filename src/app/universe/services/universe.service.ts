import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UniverseService {

  
  private BASEURL = environment.baseUrl;
  private endPoint = 'Universe';

  constructor(private _http:HttpClient) { }

  search(params:any):Observable<any>{
    return this._http.get(`${this.BASEURL}${this.endPoint}/getUnvierseMult`, {params:new HttpParams({fromObject:params})})
  }
  create(){

  }
  update(){

  }
}
