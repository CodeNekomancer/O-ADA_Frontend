import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  
  constructor(private _fb:FormBuilder, private _authService:AuthService, private _router:Router) { }

  ngOnInit() {
    this.registerForm = this._fb.group({
      username:['', Validators.required],
      password:['', Validators.required],
      email:['', Validators.required]
    })
  }

  onSubmit(){
    const user = {
      username:this.registerForm.value.username,
      password:this.registerForm.value.password,
      email:this.registerForm.value.email
    }
    this._authService.register(user).subscribe(
      (res)=>{
        this._authService.login(user).subscribe(
          (res)=>{
            localStorage.setItem('oada-auth',res.token);
            this._router.navigate(['/universe'])
          },
          (err)=>{
            console.error(err);
          }
        )
        localStorage.setItem('oada-auth',res.token);
      },
      (err)=>{
        console.error(err);
      }
    )
  }
}
