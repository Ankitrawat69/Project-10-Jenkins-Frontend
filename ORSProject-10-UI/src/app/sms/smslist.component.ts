import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-smslist',
  templateUrl: './smslist.component.html',
  styleUrls: ['./smslist.component.css']
})
export class SmslistComponent extends BaseListCtl{

  constructor(locator : ServiceLocatorService, route : ActivatedRoute) {
        super(locator.endpoints.SMS, locator, route);
      }
  }
 
