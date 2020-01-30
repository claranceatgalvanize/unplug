import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }
  checkLogin(url: string): boolean {
    if (this.authService.loggedInStatus) {
      return true;
    }

    // store the attempted url for redirecting
    this.authService.redirectUrl = url;

    // navigate to the login page
    this.router.navigate(["/login"]);

    return false;
  }
  constructor(private authService: AuthService, private router: Router) {}
}
