import { Component, OnInit } from '@angular/core';
import {BridgeService} from "./bridge/bridge.service";

@Component({
    moduleId: module.id,
    selector: 'app-main',
    template: `
    
    <div style="padding: 50px 0">
      [ Angular ]<button style="margin: 0 20px;background:red;color:white;width:100px;height: 50px;border:none" 
      (click)="callToOutside()">call to outside!</button>
    </div>  
  `
})
export class AppMainComponent implements OnInit {
    constructor(
      private bs:BridgeService
    ) { }

    ngOnInit() { }

    callToOutside() {
      this.bs.callToOutside();
    }

}
