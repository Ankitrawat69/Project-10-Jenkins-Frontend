import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscription-usagelist',
  templateUrl: './subscription-usagelist.component.html',
  styleUrls: ['./subscription-usagelist.component.css']
})
export class SubscriptionUsagelistComponent extends BaseListCtl {

  constructor(locator : ServiceLocatorService, route : ActivatedRoute) {
             super(locator.endpoints.SUBSCRIPTIONUSAGE, locator, route);
           }
       }

