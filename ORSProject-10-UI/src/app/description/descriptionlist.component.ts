import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descriptionlist',
  templateUrl: './descriptionlist.component.html',
  styleUrls: ['./descriptionlist.component.css']
})
export class DescriptionlistComponent extends BaseListCtl {

   constructor(public locator: ServiceLocatorService, route: ActivatedRoute) { 
                         super(locator.endpoints.DESCRIPTION, locator, route);
         }
       }
