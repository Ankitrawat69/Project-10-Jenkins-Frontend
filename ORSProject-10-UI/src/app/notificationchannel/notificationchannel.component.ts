import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notificationchannel',
  templateUrl: './notificationchannel.component.html',
  styleUrls: ['./notificationchannel.component.css']
})
export class NotificationchannelComponent extends BaseCtl{

   constructor(public locator: ServiceLocatorService, route: ActivatedRoute) { 
                   super(locator.endpoints.NOTIFICATION, locator, route);
                 }
                }
  


