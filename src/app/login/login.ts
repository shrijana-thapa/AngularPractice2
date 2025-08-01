import { Component } from '@angular/core';
import { AuthGuard } from '../auth-guard';
import {  Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(private router:Router,private authguard:AuthGuard){
    
  }
  login(){
    this.authguard.toggleLogin();
    
    
    
    this.router.navigate(['/personal']);
  }
}
