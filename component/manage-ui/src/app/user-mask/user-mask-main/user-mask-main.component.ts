import { Component, OnInit } from '@angular/core';
import { UserMaskService } from 'app/commons/services/usermask.service';
import {MessageService} from '../../commons/services/message.service';

@Component({
  selector: 'app-user-mask-main',
  templateUrl: './user-mask-main.component.html',
  styleUrls: ['./user-mask-main.component.scss']
})
export class UserMaskMainComponent implements OnInit {

  private smMSISDN: string = "";
  private smMask: string = "";
  private suMSISDN: string = "";
  private suMask: string = "";
  private showMask: boolean;
  private showUserId: boolean;

  constructor(private userMaskService : UserMaskService, private message: MessageService) { }

  ngOnInit() {
    this.showMask = false;
    this.showUserId = false;
  }


  getUserMask() {
    this.userMaskService.getUserMask(this.smMSISDN,  (response) => {
      if (response.success) {
          if (response.payload.result === 'undefined' || response.payload.result === 'empty') {
            //TODO handle payload empty case in success response
          } else {
            this.showMask = true;
            this.smMask = response.payload.mask;
          }
      } else {
        this.showMask = false
        this.message.error(response.message)
      }
  });
  }


  getUserId() {
    this.userMaskService.getUserId(this.suMask,  (response) => {
      if (response.success) {
          if (response.payload.result === 'undefined' || response.payload.result === 'empty') {
            //TODO handle payload empty case in success response
          } else {
            console.log(response)
            this.showUserId = true;
            this.suMSISDN = response.payload.userId;
          }
      } else {
        this.showUserId = false
        this.message.error(response.message)
      }
  });
  }
}
