(function () {
"user strict";

angular.module('public')
.controller('ClientController', ClientController)
.controller('ClientShowController', ClientShowController);


ClientController.$inject = ['ClientService', '$filter', '$element'];
function ClientController(ClientService, $filter, $element) {
  var ctrl = this;

  // ctrl.submit = function () {
  //   ctrl.client.fav = $filter('uppercase')(ctrl.client.fav);
  //   var promise = ClientService.favChecking(ctrl.client.fav);
  //   promise.then( function (response){
  //     if (response.status === 200 ) {
  //       ctrl.client.favDish = response.data;
  //       ctrl.valid = true;
  //     }
  //     ctrl.completed = true;
  //
  //     if (ctrl.valid && ctrl.completed) {
  //       ClientService.getClient(ctrl.client);
  //       ctrl.saved = true;
  //     }
  //   });
  // };

  // **Bonus Task 3:**
  ctrl.submit = function () {
      if (ctrl.valid) {
        ClientService.getClient(ctrl.client);
        ctrl.saved = true;
      }
  };

  ctrl.favChanging = function () {
    ctrl.client.fav = $filter('uppercase')(ctrl.client.fav);

    if (ctrl.client.fav) {

      var promise = ClientService.favChecking(ctrl.client.fav);
      promise.then( function (response) {
        if ( response.status === 200 ) {
          ctrl.client.favDish = response.data;
          ctrl.valid = true;
        } else {
          ctrl.valid = false;
        }
      });
      ctrl.completed = true;
    } else {
      ctrl.completed = false;
    }

  };

}

ClientShowController.$inject = ['client', 'ApiPath'];
function ClientShowController(client, ApiPath) {
  var ctrl = this;
  ctrl.client = client;
  ctrl.basePath = ApiPath;
  // console.log('basePath ', ctrl.basePath);
}

})();
