import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-webhooklist',
  templateUrl: './webhooklist.component.html',
  styleUrls: ['./webhooklist.component.css']
})
export class WebhooklistComponent extends BaseListCtl {

     constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
             super(locator.endpoints.WEBHOOK, locator, route);
           }
         }

