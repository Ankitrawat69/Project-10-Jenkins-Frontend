import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-locker',
  templateUrl: './locker.component.html',
  styleUrls: ['./locker.component.css']
})
export class LockerComponent extends BaseCtl {

   constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
                 super(locator.endpoints.LOCKER, locator, route);
   }

}
