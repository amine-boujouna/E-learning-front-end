import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { TokenserviceService } from '../service/tokenservice.service';

import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CanLoginGuard implements CanActivate {
  constructor(private tokenservice:TokenserviceService,private router:Router){}
  canActivate():boolean{
    if(this.tokenservice.loggedIn()){
      return true
    }else{
      this.router.navigate(['/accueil'])
      return false
    }
   
  }
   
}
