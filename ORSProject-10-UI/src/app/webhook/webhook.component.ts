import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-webhook',
  templateUrl: './webhook.component.html',
  styleUrls: ['./webhook.component.css']
})
export class WebhookComponent extends BaseCtl {

       constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
          super(locator.endpoints.WEBHOOK, locator, route);
        }
      }
