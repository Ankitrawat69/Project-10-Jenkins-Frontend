

import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

<<<<<<< HEAD

=======
>>>>>>> a31e9f0dd079118b5421367151b7e7067175dc28
@Component({
  selector: 'app-meeting-list',
  templateUrl: './meetinglist.component.html',
})
export class MeetingListComponent extends BaseListCtl{

   constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.MEETING, locator, route);
  }

}
