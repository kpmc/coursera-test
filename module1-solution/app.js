(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
      //$scope.items="";

      $scope.checkItems = function() {
        var scopeItems = $scope.items;
        if (!scopeItems) {
          $scope.message = "Please enter data";
        } else {
          var items = scopeItems.split(",");
          if (items.length > 3) {
            console.log("number of items = " + items.length);
            console.log("items = " + items);
            $scope.message = "Too many items";
          } else if (items.length > 0){
            // ok
            console.log("number of items = " + items.length);
            console.log("items = " + items);
            $scope.message = "Acceptable number of items";
          }
        }

      }

  }


})();
