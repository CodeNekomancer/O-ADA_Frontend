import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-multiverse-view',
  templateUrl: './multiverse-view.component.html',
  styleUrls: ['./multiverse-view.component.scss']
})
export class MultiverseViewComponent implements OnInit {
  multiverseData:any[] = [];
  myUniverses:any[] = [];
  constructor(private _route:ActivatedRoute, private _router:Router) { }

  ngOnInit() {
    this.multiverseData = this._route.snapshot.data.patata.multiverse; // [0].domain
    this.myUniverses = this._route.snapshot.data.patata.myUniverses;
  }

}
