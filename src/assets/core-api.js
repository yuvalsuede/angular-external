(function(window){
  'use strict';

  function define_library(){


    var CoreApi = {
      ExternalService: {},
      AngularService: {}
    };

    // settings of Injectable Bridge Service
    CoreApi.setAngularService = function(serviceRef) {

      CoreApi.AngularService = serviceRef;

    }

    // set external function to call from Angular
    CoreApi.ExternalService.hello = function(){

      alert('Hello from External-Service');

    }

    // set function calls to Angular
    CoreApi.AngularService.hello = function() {

      if (typeof (CoreApi.AngularService.hello) == "function") {

        CoreApi.AngularService.hello();

      }

    }

    return CoreApi;
  }
  //define globally if it doesn't already exist
  if(typeof(CoreApi) === 'undefined'){
    window.CoreApi = define_library();
  }
  else{
    console.log("CoreApi already defined.");
  }
})(window);
