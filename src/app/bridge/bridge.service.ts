import { Injectable, NgZone } from '@angular/core';

declare var CoreApi;

@Injectable()
export class BridgeService {

  constructor(private zone:NgZone) {

    let serviceReference = {
      // configuration
      zone: this.zone,
      component: this,

      // internal functions declaration
      callFromOutside: (value) => this.callFromOutside(value),
      hello: () => { alert('Hello from Angular!') }

    }

    CoreApi.setAngularService(serviceReference);

  }

  ngOnInit() { }

  callFromOutside(value) {
    alert('called From Outside ' + value);
  }

  callToOutside() {
    CoreApi.ExternalService.hello();
  }


}
