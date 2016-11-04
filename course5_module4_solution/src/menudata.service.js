(function (){
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService ($http) {
  var service = this;
  // console.log('MenuDataService');

  service.getAllCategories = function () {
    return $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/categories.json'
    }).then( function (response) {
      return response;
    });
  };

  service.getItemsForCategory = function (categoryShortName) {
    return $http({
      method: 'GET',
      url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName
    }).then (function (response) {
      return response;
    });
  };

}

})();
