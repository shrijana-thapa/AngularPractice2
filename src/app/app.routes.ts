import { Routes } from '@angular/router';
import { Login } from './login/login';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { Profile } from './profile/profile';
import { Admin } from './admin/admin';
import { Personal } from './personal/personal';
import { AuthGuard } from './auth-guard';
import { Details } from './details/details'; // FIX: Uncomment and correct the path if the file exists
 import { DeactiveGuard } from './deactivate-guard';


export const routes: Routes = [{path:'About',component:About}
  ,{path:'Contact',component:Contact
},
{
  path:'home',component:Home
},
{
  path:'profile',component:Profile,data:{name:'mohan'}
},
{path:'admin',loadComponent:()=> import ("./admin/admin").then ((c)=>c.Admin)},
{
  path:'Login',component:Login
},
{
  path:'personal',component:Personal,canActivate:[AuthGuard]
},
{
  path:'details',component:Details,canDeactivate:[DeactiveGuard]

},
{
  path:'**' ,component:PageNotFound
}];
