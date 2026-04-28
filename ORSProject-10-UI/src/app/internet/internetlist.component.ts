import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-internetlist',
  templateUrl: './internetlist.component.html',
  styleUrls: ['./internetlist.component.css']
})
export class InternetlistComponent extends BaseListCtl{

         constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
                        super(locator.endpoints.INTERNET, locator, route);
                      }
                    }