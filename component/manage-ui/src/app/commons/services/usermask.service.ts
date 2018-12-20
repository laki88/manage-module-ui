import { Injectable } from "@angular/core";
import { UserMaskRemoteDataService } from "app/data-providers/usermask-remote-data.service";




@Injectable()
export class UserMaskService {

    constructor(private _remoteService : UserMaskRemoteDataService) {

    }

    getUserMask(msisdn: string, callback: Function) {
        this._remoteService.getUserMask(msisdn)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }


    getUserId(mask: string, callback: Function) {
        this._remoteService.getUserId(mask)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

}