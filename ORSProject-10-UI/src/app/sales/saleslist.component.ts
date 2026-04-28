import { Component } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';

@Component({
  selector: 'app-saleslist',
  templateUrl: './saleslist.component.html',
  styleUrls: ['./saleslist.component.css']
})
export class SaleslistComponent extends BaseListCtl{

      constructor(public locator: ServiceLocatorService, route: ActivatedRoute) { 
           super(locator.endpoints.SALES, locator, route);
  }
 }
