import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { forkJoin } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UniverseService } from '../services/universe.service';

@Injectable({
  providedIn: 'root'
})
export class UniverseResolverService implements Resolve<any> {

  constructor(private _universeService:UniverseService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const params  = {}
    const $universes = this._universeService.search(params);
    const $myUniverses = this._universeService.getMyUniverses();
    return forkJoin($universes, $myUniverses).pipe(map(
      (res)=>{
        return {
          multiverse:res[0],
          myUniverses: res[1]
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
