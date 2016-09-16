(function () {
  'use strict'

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope) {
    
    $scope.menuList = '';
    $scope.checkButton = function () {
      var menuList = $scope.menuList;
      var menuListArray = menuList.split(',');

      // console.log(menuList);
      // console.log(menuListArray);
      // console.log(menuListArray.length);


      var menuListArraySize = 0;
      for (var i = 0; i < menuListArray.length; i++) {
        if (menuListArray[i].trim()) {
          menuListArraySize++;
        }
      }

      // console.log(menuListArray);
      // console.log(menuListArray.length);
      // console.log(menuListArraySize);
      
      $scope.message = '';      
      if (menuList) {
        //not empty string

        if (menuListArraySize <= 3) {
          $scope.message = 'Enjoy!';
        }

        if (menuListArraySize > 3) { 
          $scope.message = 'Too much!';
        }

        $scope.color = 'green';

      }
        else {
          //empty string
          $scope.message = 'Please enter data first';
          $scope.color = 'red';
        }

    };
  
  };
})();