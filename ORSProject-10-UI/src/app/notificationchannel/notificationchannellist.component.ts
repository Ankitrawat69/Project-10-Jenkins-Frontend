import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notificationchannellist',
  templateUrl: './notificationchannellist.component.html',
  styleUrls: ['./notificationchannellist.component.css']
})
export class NotificationchannellistComponent extends BaseListCtl {

   constructor(public locator: ServiceLocatorService, route: ActivatedRoute) { 
                     super(locator.endpoints.NOTIFICATION, locator, route);
                   }
                  }
