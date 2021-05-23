import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-multiverse-view',
  templateUrl: './multiverse-view.component.html',
  styleUrls: ['./multiverse-view.component.scss']
})
export class MultiverseViewComponent implements OnInit {
  //TODO: endpoint para mis universos y otro para todos, para la vista principal y la de añadirme a uno nuevo
  //TODO: CREATE UNIVERSO
  multiverseData:any[] = [];
  constructor(private _route:ActivatedRoute, private _router:Router) { }

  ngOnInit() {
    this.multiverseData = this._route.snapshot.data.patata.multiverse[0].content; // [0].domain
  }

}
