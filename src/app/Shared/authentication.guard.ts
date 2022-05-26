import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private service:SharedService,private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.service.username==="suresh" && this.service.password==="123"){
      console.log("User Authenticated to mainpage component and Main Page Component Navigate to Footer Component");
      this.router.navigate(['./footer']);
      return true;
    }
    else{
      console.log("User restricted by the Authentication routing Guard")
      return false;
    }  
  }
  
}
