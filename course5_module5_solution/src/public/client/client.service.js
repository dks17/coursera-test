(function () {
"user strict";

angular.module('common')
.service('ClientService', ClientService);

ClientService.$inject = ['$http', 'ApiPath'];
function ClientService($http, ApiPath) {
  var service = this;

  service.favChecking = function (fav) {
    return $http.get(ApiPath + '/menu_items/' + fav + '.json')
                .then(function successCallback(response) {
                  return response;
                }, function errorCallback(response) {
                  return response;
                }
          );
  };

  service.getClient = function (client) {
    service.client = client;
    // console.log('Service client: ', client);
  };

}

})();
