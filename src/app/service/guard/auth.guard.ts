import { inject, Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';

import { Observable } from 'rxjs';
import { DecodejwtServiceService } from '../decodejwt/decodejwt-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
token:any
  constructor(
    private authService: DecodejwtServiceService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (typeof localStorage !== 'undefined') {
       this.token = localStorage.getItem('jwt');
    }
    if (!this.token) {
      return this.router.createUrlTree(['']);
    }

    const roleAttendu = route.data['role'] as string;
    const rolePerson = this.authService.getRoleFromToken(this.token);
    console.log('role' + rolePerson);

    if (rolePerson === roleAttendu) {
      return true;
    } else {
        localStorage.removeItem('jwt')
      return this.router.createUrlTree(['']);
    }
  }
}
