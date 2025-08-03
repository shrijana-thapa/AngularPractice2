import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot,CanDeactivate,GuardResult,MaybeAsync,RouterStateSnapshot,UrlTree } from "@angular/router";
import { Observable} from "rxjs";
import { Details } from "./details/details";

@Injectable({
  providedIn:'root'
})
export class DeactiveGuard implements CanDeactivate<Details>{
  canDeactivate(component: Details, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(component.isFormDirty){
      return window.confirm("Are you sure you want to leave this page?");
    }
    return true;
  }

}

