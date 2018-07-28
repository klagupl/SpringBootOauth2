import { AuthService } from './../auth.service';
import { Injectable } from "../../../node_modules/@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "../../../node_modules/@angular/router";
import { Observable } from '../../../node_modules/rxjs';


@Injectable()
export class DashBoardGuardService implements CanActivate{

    constructor(private authService:AuthService){}

    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean>|boolean{
            return this.authService.isLoggedIn();
    }

}