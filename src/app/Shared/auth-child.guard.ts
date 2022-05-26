import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthChildGuard implements CanActivateChild {
  constructor(private service:SharedService,private router:Router){

  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.service.usernameChild==="chanikya" && this.service.passwordChild==="123456"){
        console.log("User is Authenticated to Child of Nav Component and Navigating to the Right Nav Component");
        this.router.navigate(['/rightnav'])
        return true;
      }
      else{
        console.log("User is Restricted to child of nav component");
        return false;
      }
  }
  
}
