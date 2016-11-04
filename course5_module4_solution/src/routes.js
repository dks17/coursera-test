(function (){
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig ($stateProvider, $urlRouterProvider) {

  // console.log("RoutesConfig");
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'src/home.template.html'
  })
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/categories.html',
    controller: 'CategoriesComponentController as $ctrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService){
        // console.log("state categories resolve");
        return MenuDataService.getAllCategories();
      }]
    }
  })
  .state('items', {
    url: '/items/{categoryId}',
    templateUrl: 'src/items.html',
    controller: 'ItemsComponentController as $ctrl',
    resolve: {
      items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams){
        // console.log("state items resolve");
        return MenuDataService.getItemsForCategory($stateParams.categoryId);
      }]
    }
  });

}

})();
