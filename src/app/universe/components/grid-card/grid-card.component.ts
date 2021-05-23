import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.scss']
})
export class GridCardComponent implements OnInit {
  @Input() universeList;

  constructor() { }

  ngOnInit() {
  }

}
