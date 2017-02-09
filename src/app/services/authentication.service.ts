import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { User } from '../model/user';
import { LoginUserWrapper } from '../model/login-user-wrapper';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class AuthenticationService {
    //public token: String;

    constructor(private http: Http, private router: Router) {
        // set token if saved in local storage
        //let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        //this.token = currentUser && currentUser.token;
    }

    private loginUrl = 'http://localhost:8089/SmartRead/rest/user/login';
    //private loginUrl = '/api/login';

    login(user: User): Observable<boolean> {
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        let wrapper = new LoginUserWrapper(user);
        let userjson = JSON.stringify(wrapper);
        return this.http.post(this.loginUrl, userjson, options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    //this.token = token;
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    //sessionStorage.setItem('currentUser', user.username.toString());
                    Cookie.set('currentUser', response.json().token);
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            }).catch((error: any) => Observable.of(false));
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        //this.token = null;
        //sessionStorage.removeItem('currentUser');
        if (Cookie.get('currentUser')){
            Cookie.delete('currentUser');
        }
        this.router.navigate(['/login'])
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
} 