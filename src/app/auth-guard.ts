import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot,Router } from "@angular/router";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn:'root',
})

export class AuthGuard implements  CanActivate{
  private isLoggedIn= false;
  constructor(private router:Router){
  }
 canActivate():boolean {
   if(this.isLoggedIn){
    return true;
   }
   else{
    this.router.navigate(['/Login']);
    return false;
   }
 }
 toggleLogin():void{
  this.isLoggedIn=!this.isLoggedIn;
 }
}
