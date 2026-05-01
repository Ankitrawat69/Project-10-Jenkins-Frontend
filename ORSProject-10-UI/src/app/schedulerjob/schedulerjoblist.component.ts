import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedulerjoblist',
  templateUrl: './schedulerjoblist.component.html',
  styleUrls: ['./schedulerjoblist.component.css']
})
export class SchedulerjoblistComponent extends BaseListCtl {

   constructor(public locator: ServiceLocatorService, route: ActivatedRoute) { 
                       super(locator.endpoints.SCHEDULERJOB, locator, route);
                     }
                    }
