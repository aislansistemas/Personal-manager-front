import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';

@Injectable({ providedIn: 'root'})
export class UserAuthService { 
    
    constructor(private tokenService: TokenService){}
    
    logout() {
        this.tokenService.removeToken();
    }

    isLogged() {
        return this.tokenService.hasToken();
    }

    getUserName() {
        return this.tokenService.getTokenEncoded().unique_name;
    }

    getUserEmail() {
        return this.tokenService.getTokenEncoded().email;
    }

    getUserId() {
        return this.tokenService.getTokenEncoded().sub;
    }

    getUserRole() {
        return this.tokenService.getTokenEncoded().role;
    }

    saveToken(token: string) {
        this.tokenService.setToken(token);
    }

}
