(function() {
'use strict';

angular.module('ControllerAsApp', [])
.controller('Controller', Controller);

Controller.$inject = ['$scope'];
function Controller($scope) {
    $scope.dD1 = false;
    $scope.dD2 = false;
    $scope.dD3 = false;
    $scope.changeCaret1 = "caret";
    $scope.changeCaret2 = "caret";
    $scope.changeCaret3 = "caret";
    $scope.isChecked = false;

    $scope.checkToggle = function () {
        $scope.isChecked = $scope.isChecked ? $scope.checkedValue = "No" : $scope.checkedValue = "Yes"
    }

    $scope.d1Click = function () {
        $scope.dD2 = false;
        $scope.dD3 = false;
        $scope.dD1 = $scope.dD1 ? false : true;
        $scope.changeCaret2 = "caret";
        $scope.changeCaret3 = "caret";
        $scope.changeCaret1 = $scope.dD1 == true ? "caret-up" : "caret";
    };

    $scope.d2Click = function () {
        $scope.dD1 = false;
        $scope.dD3 = false;
        $scope.dD2 = $scope.dD2 ? false : true;
        $scope.changeCaret1 = "caret";
        $scope.changeCaret3 = "caret";
        $scope.changeCaret2 = $scope.dD2 == true ? "caret-up" : "caret";
    };

    $scope.d3Click = function () {
        $scope.dD2 = false;
        $scope.dD1 = false;
        $scope.dD3 = $scope.dD3 ? false : true;
        $scope.changeCaret2 = "caret";
        $scope.changeCaret1 = "caret";
        $scope.changeCaret3 = $scope.dD3 == true ? "caret-up" : "caret";
    };
}

})();