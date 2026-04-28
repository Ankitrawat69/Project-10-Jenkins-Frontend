import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-geofencelist',
  templateUrl: './geofencelist.component.html',
  styleUrls: ['./geofencelist.component.css']
})
export class GeofencelistComponent extends BaseListCtl{

    constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
                      super(locator.endpoints.GEOFENCE, locator, route);
                    }
                  }

