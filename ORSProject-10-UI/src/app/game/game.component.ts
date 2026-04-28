import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent extends BaseCtl{

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) { 
      super(locator.endpoints.GAME, locator, route);
    }
   }
