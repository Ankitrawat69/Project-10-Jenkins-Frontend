import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loginattempt',
  templateUrl: './loginattempt.component.html',
  styleUrls: ['./loginattempt.component.css']
})
export class LoginattemptComponent extends BaseCtl {

        constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
                        super(locator.endpoints.LOGINATTEMPT, locator, route);
                      }
                    }

