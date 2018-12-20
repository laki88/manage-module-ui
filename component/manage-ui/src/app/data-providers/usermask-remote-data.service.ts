import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {AuthenticationService} from '../commons/services/authentication.service';
import {UserMask} from '../commons/models/common-data-models'
import {Observable} from 'rxjs';
import { userInfo } from 'os';


@Injectable()
export class UserMaskRemoteDataService {
    private url = new URL(window.location.href);
    private apiContext = this.url.protocol + '//' + this.url.host + '/usermask-service/services/';
    
    private apiEndpoints: Object = {
        usermaskByMSISDN: this.apiContext + 'user-mask/msisdn/',
        msisdnByUserMask: this.apiContext + 'user-mask/mask/'
    };

    constructor(private http : Http, private _authenticationService: AuthenticationService) {

    }

    /**
     * to get user mask
     * @returns {Observable<R>}
     */
    getUserMask(msisdn: string) {
        let userMaskInfo = new UserMask();
        userMaskInfo.userId = msisdn;
        return this.http.post(this.apiEndpoints['usermaskByMSISDN'] ,JSON.stringify(userMaskInfo) , this.getOptions())
            .map((response: Response) => {
                return {
                    success: true,
                    message: 'User mask retrieved successfully',
                    payload: response.json()
                };
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error retrieving user mask',
                error: error
            }));
    }

    /**
     * to get user id
     * @returns {Observable<R>}
     */
    getUserId(mask: string) {
        let userMaskInfo = new UserMask();
        userMaskInfo.mask = mask;
        return this.http.post(this.apiEndpoints['msisdnByUserMask'], JSON.stringify(userMaskInfo), this.getOptions())
            .map((response: Response) => {
                return {
                    success: true,
                    message: 'User id retrieved successfully',
                    payload: response.json()
                };
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error retrieving user id, May be entered mask is incorrect.',
                error: error
            }));
    }

    getOptions(): RequestOptions {
        const token = this._authenticationService.loginUserInfo.getValue().token;
        const useName = this._authenticationService.loginUserInfo.getValue().userName;
        const headers = new Headers(
            {
                'Authorization': 'Basic ' + token,
                'user-name': useName,
                'Content-Type': 'application/json'
            });
        return new RequestOptions({headers: headers});
    }
}