import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscription-usage',
  templateUrl: './subscription-usage.component.html',
  styleUrls: ['./subscription-usage.component.css']
})
export class SubscriptionUsageComponent extends BaseCtl {

  constructor(locator : ServiceLocatorService, route : ActivatedRoute) {
           super(locator.endpoints.SUBSCRIPTIONUSAGE, locator, route);
         }
     }
