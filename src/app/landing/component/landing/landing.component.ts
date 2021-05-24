import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  
  constructor(private _router:Router) { }

  ngOnInit() {
  }

  onLoginSubmint() {
    this._router.navigate(['/auth/login']);
  }

  onRegisterSubmint() {
    this._router.navigate(['/auth/register']);
  }

}
