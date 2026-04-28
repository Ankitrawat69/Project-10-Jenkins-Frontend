import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loginattemptlist',
  templateUrl: './loginattemptlist.component.html',
  styleUrls: ['./loginattemptlist.component.css']
})
export class LoginattemptlistComponent extends BaseListCtl {
 
        constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
                               super(locator.endpoints.LOGINATTEMPT, locator, route);
                             }
                            }
