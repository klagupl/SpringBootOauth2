import { Injectable } from "../../node_modules/@angular/core";
import { Router, ActivatedRoute } from '../../node_modules/@angular/router';
import { Http, Headers,Response, RequestOptions } from "../../node_modules/@angular/http";
import 'rxjs/Rx';
import { Cookie } from 'ng2-cookies';

@Injectable()
export class AuthService{

    constructor(private router: Router,private http:Http){}
    private role: String;
    private isLogged=false;

    obtainAccessToken(loginData){
        let params = new URLSearchParams();
        params.append('username',loginData.username);
        params.append('password',loginData.password);
        params.append('grant_type','password');
        params.append('client_id','ClientId');
        let headers = new Headers({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Basic '+btoa("ClientId:secret")});
        let options = new RequestOptions({ headers: headers });

        this.http.post('http://localhost:8080/oauth/token', params.toString(), options)
      .map(res => res.json())
      .subscribe(
        data => this.saveToken(data),
               
        err => alert('Invalid Credentials')); 
    }
    saveToken(token){
        var expireDate = new Date().getTime() + (1000 * token.expires_in);
        Cookie.set("access_token", token.access_token, expireDate);
        this.router.navigate(['/']); 
      }
      checkCredentials(){
        if (!Cookie.check('access_token')){
            this.router.navigate(['/login']);
        }
      } 
    
      logout() {
        Cookie.delete('access_token');
        this.router.navigate(['/login']);
      }
      isLoggedIn(){
          if(Cookie.check('access_token')){
              return true;
          }
          else{
            this.router.navigate(['/login']);
              return false;
             
          }
      }
}