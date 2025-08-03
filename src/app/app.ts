import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink, RouterLinkActive } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,Header,User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  user1:string='';
  protected readonly title = signal('Routing');
  changeValue(name:string){
    this.user1=name;
  }
}
