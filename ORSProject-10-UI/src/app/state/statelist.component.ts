import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-statelist',
  templateUrl: './statelist.component.html',
  styleUrls: ['./statelist.component.css']
})
export class StatelistComponent extends BaseListCtl {

        constructor(public locator: ServiceLocatorService, route: ActivatedRoute) { 
               super(locator.endpoints.STATE, locator, route);
             }
            }
         
