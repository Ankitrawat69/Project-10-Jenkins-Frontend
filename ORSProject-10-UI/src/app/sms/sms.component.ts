import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent  extends BaseCtl{

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) { 
           super(locator.endpoints.SMS, locator, route);
         }
        }