import { Component } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';

<<<<<<< HEAD

=======
>>>>>>> a31e9f0dd079118b5421367151b7e7067175dc28
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
})
export class CustomerComponent extends BaseCtl{

   constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
      super(locator.endpoints.CUSTOMER, locator, route);
    }

}
