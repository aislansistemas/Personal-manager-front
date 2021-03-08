  
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../user-auth/user-auth-service';

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(
        private userAuthService: UserAuthService,
        private router: Router
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        const expectedRole = route.data.expectedRole;

        if (!this.userAuthService.isLogged() || expectedRole !== this.userAuthService.getUserRole()) { 
            this.router.navigate(
                [''],
                {
                    queryParams: {
                        fromUrl: state.url
                    }
                }
            );
            return false; 
        } 
        return true; 
    }

}