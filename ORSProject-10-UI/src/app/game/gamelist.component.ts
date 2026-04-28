import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class GamelistComponent extends BaseListCtl {

     constructor(public locator: ServiceLocatorService, route: ActivatedRoute) { 
          super(locator.endpoints.GAME, locator, route);
        }
       }
    
