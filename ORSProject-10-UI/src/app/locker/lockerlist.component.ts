import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lockerlist',
  templateUrl: './lockerlist.component.html',
  styleUrls: ['./lockerlist.component.css']
})
export class LockerlistComponent extends BaseListCtl {

      constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
                      super(locator.endpoints.LOCKER, locator, route);
        }
     
     }
     