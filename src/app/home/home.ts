import { Component } from '@angular/core';
import { RouterLink,Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

 
  constructor(private router:Router){}

  sendData(){
  const gege = this.router.navigate(['profile'], {queryParams:{name:'anu'}})
  
  }

}
