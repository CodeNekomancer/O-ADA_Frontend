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
    console.log(this.universeList)
    var newarray = new Array;
    if (this.universeList[0].itsUniverse != undefined) {
      this.universeList.forEach(element => {
        newarray.push(element.itsUniverse)
      });
      this.universeList = newarray;
    }
  }
}
