import { Component } from '@angular/core';
import {BridgeService} from "./bridge/bridge.service";

@Component({
  selector: 'app-root',
  template:`
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private bs: BridgeService) {

  }
}
