(function() {
'use strict';

angular.module('ControllerAsApp', [])
.controller('Controller', Controller);

Controller.$inject = ['$scope', '$filter'];
function Controller($scope, $filter) {
    $scope.popup = "";

    $scope.DClick = function () {
        popup.classList.toggle("show");
    };
}


})();