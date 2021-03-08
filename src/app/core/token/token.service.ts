import { Injectable } from '@angular/core';
import { TokenModel } from '../../Models/TokenModel';
import jwt_decode from "jwt-decode";

const KEY = 'authToken';

@Injectable({ providedIn: 'root'})
export class TokenService {

    private tokenModel: TokenModel;
    
    hasToken():boolean {
        return this.getToken() === null ? false : true;
    }

    setToken(token: string) {
        window.localStorage.setItem(KEY, token);
    }

    getToken() {
        return window.localStorage.getItem(KEY);
    }

    removeToken() {
        window.localStorage.removeItem(KEY);
    }

    getTokenEncoded():TokenModel {
        if(this.hasToken()) {
            var tokenDecode = JSON.stringify(jwt_decode(this.getToken() as string) as string);
            this.tokenModel = JSON.parse(tokenDecode) as TokenModel;
        }
        return this.tokenModel;
    }

}