(function() {
'use strict';

angular.module('ControllerAsApp', [])
.controller('Controller', Controller);

Controller.$inject = ['$scope'];
function Controller($scope) {
    $scope.D1Click = function () {
        alert("Dummy1 PopUp Successful")
    };

    $scope.D2Click = function () {
        alert("Dummy2 PopUp Successful")
    };

    $scope.D3Click = function () {
        alert("Dummy3 PopUp Successful")
    };
}


})();