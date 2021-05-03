import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { UniverseService } from '../services/universe.service';

@Injectable({
  providedIn: 'root'
})
export class UniverseResolverService implements Resolve<any> {

  constructor(private _universeService:UniverseService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const params  = {}
    const $universes = this._universeService.search(params);
    return forkJoin($universes).pipe(map(
      (res)=>{
        console.log(res)
        return {
          multiverse:[
            res[0]
          ]
        }
      },
      (error)=>{
        return{
          multiverse:[
            null
          ]
        }
      }
    ))
  }
}
