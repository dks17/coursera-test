(function () {
'use strict';

angular.module('data')
.controller('CategoriesComponentController', CategoriesComponentController);

CategoriesComponentController.$inject = ['categories'];
function CategoriesComponentController (categories){
  var $ctrl = this;
  // console.log('CategoriesComponentController');

  $ctrl.categories = categories.data;

  // console.log($ctrl.categories);
}

})();
