import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private _fb:FormBuilder, private _authService:AuthService, private _router:Router) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      username:['', Validators.required],
      password:['', Validators.required]
    })
  }

  onSubmit(){
    const user = {
      username:this.loginForm.value.username,
      password:this.loginForm.value.password,
    }
    this._authService.login(user).subscribe(
      (res)=>{
        localStorage.setItem('oada-auth',res.token);
        this._router.navigate(['/universe'])
      },
      (err)=>{
        console.error(err);
        
      }
    )
  }
}
