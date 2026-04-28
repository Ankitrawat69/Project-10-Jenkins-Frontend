import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sessionlist',
  templateUrl: './sessionlist.component.html',
  styleUrls: ['./sessionlist.component.css']
})
export class SessionlistComponent extends BaseListCtl{

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) { 
                 super(locator.endpoints.SESSION, locator, route);
          }
     }
