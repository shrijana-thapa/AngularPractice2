import { Routes } from '@angular/router';
import { Login } from './login/login';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { Profile } from './profile/profile';

export const routes: Routes = [{path:'About',component:About},{
  path:'Login',component:Login}
  ,{path:'Contact',component:Contact
},
{
  path:'',component:Home
},
{
  path:'profile',component:Profile
},
{
  path:'**' ,component:PageNotFound
}];
