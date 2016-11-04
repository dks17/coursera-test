(function () {
'use strict';

angular.module('data')
.controller('ItemsComponentController', ItemsComponentController);

ItemsComponentController.$inject = ['items'];
function ItemsComponentController (items){
  var $ctrl = this;
  // console.log('ItemsComponentController');

  $ctrl.items = items.data.menu_items;
  $ctrl.categoryName = items.data.category.name;

  // console.log($ctrl.items);
}

})();
