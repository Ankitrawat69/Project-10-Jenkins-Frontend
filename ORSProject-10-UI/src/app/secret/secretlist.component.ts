import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-secretlist',
  templateUrl: './secretlist.component.html',
  styleUrls: ['./secretlist.component.css']
})
export class SecretlistComponent extends BaseListCtl{

   constructor(public locator: ServiceLocatorService, route: ActivatedRoute) { 
                           super(locator.endpoints.SECRET, locator, route);
           }
         }
