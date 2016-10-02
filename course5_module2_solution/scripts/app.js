(function (){
'use strict';

var initialArray = [
  {name: 'Milk', quantity: 1},
  {name: 'Honey', quantity: 2},
  {name: 'Bread', quantity: 3},
  {name: 'Butter', quantity: 4},
  {name: 'Chocolate bar', quantity: 5},
  {name: 'Cookies', quantity: 6}
];

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyItems = this;

  buyItems.items = ShoppingListCheckOffService.getBuyItems();
  buyItems.removeItem = function (index) {
    ShoppingListCheckOffService.checkOffItem(index);
  };
  buyItems.emptyArray = function () {
    return ShoppingListCheckOffService.emptyArrayChecker(buyItems.items);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtItems = this;
  boughtItems.items = ShoppingListCheckOffService.getBoughtItems();
  boughtItems.emptyArray = function () {
    return ShoppingListCheckOffService.emptyArrayChecker(boughtItems.items);
  };
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyList = initialArray;
  var boughtList = [];

  service.getBuyItems = function() {
    return toBuyList;
  };

  service.getBoughtItems = function() {
    return boughtList;
  };

  service.checkOffItem = function (index) {
    boughtList.push(toBuyList[index]);
    toBuyList.splice(index, 1);
  };

  service.emptyArrayChecker = function (array) {
    var empty;
    if ((array === undefined) || (array !== undefined) && (array.length == 0) ) {
      empty = true;
    }
     else {
       empty = false;
     }
     return empty;
  };

}

})();
