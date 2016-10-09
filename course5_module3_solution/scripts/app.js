(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective(){
  var ddo = {
    scope: {
      items: '<',
      onRemove: '&'
    },
    templateUrl: 'menuList.html'
    // controller: NarrowItDownController,
    // bindToController: true,
    // controllerAs: 'ctrl',
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;
  ctrl.searchTerm = "";
  ctrl.noFound = false;

  ctrl.getMenuItems = function(){
    var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
    promise.then(
      function (response){

        // empty string and empty items array checking
        if (ctrl.searchTerm === "" || response === undefined || (1 > response.length)) {
          ctrl.noFound = true;
          ctrl.found = [];
        } else {
          ctrl.found = response;
          ctrl.noFound = false;
        }

      }
    );
  };

  ctrl.removeItem = function(index) {
    ctrl.found.splice(index, 1);
  };

}

MenuSearchService.$inject = ['$http'];
function MenuSearchService ($http) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
        method: "GET",
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
      })
      .then(
        function(response) {
           var foundItems = [];
           var menuItems = response.data.menu_items;

           for (var i = 0; i < menuItems.length; i++) {
             if (menuItems[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1){
               foundItems.push(menuItems[i]);
             }
           }
           return foundItems;
         }
       );
  };

}

})();
