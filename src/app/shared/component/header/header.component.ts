import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  logOut(){
    localStorage.removeItem('oada-auth');
    this._router.navigate(['/'])
  }

  toContact() {
    this._router.navigate(['/contact'])
  }
}
