import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.css']
})
export class PressComponent extends BaseCtl {

      constructor(public locator: ServiceLocatorService, route: ActivatedRoute) { 
          super(locator.endpoints.PRESS, locator, route);
        }
       }
