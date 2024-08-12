(function() {
'use strict';

angular.module('ControllerAsApp', [])
.controller('Controller', Controller);

Controller.$inject = ['$scope'];
function Controller($scope) {
    $scope.d1Click = function () {
        alert("Dummy1 PopUp Successful")
    };

    $scope.d2Click = function () {
        alert("Dummy2 PopUp Successful")
    };

    $scope.d3Click = function () {
        alert("Dummy3 PopUp Successful")
    };
}

})();