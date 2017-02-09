import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { User } from '../model/user';
import { RegisterUserWrapper } from '../model/register-user-wrapper';
import { Observable } from 'rxjs';

@Injectable()
export class RegisterService {
    constructor(private http: Http) { }

    private registerUrl = 'http://localhost:8089/SmartRead/rest/user/registration';

    register(user: User): Observable<String> {
        let response: Response;
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        let wrapper = new RegisterUserWrapper(user);
        let userjson = JSON.stringify(wrapper);
        //let sliced = userjson.slice(0, userjson.length);
        return this.http.post(this.registerUrl, userjson, options).map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json() || 'Server error')); //...errors if any
    }

    // private handleError (error: any) {
    //     let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    //     console.error(errMsg);
    //     return Observable.throw(errMsg);
    // }
}
