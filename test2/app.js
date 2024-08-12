(function() {
'use strict';

angular.module('ControllerAsApp', [])
.controller('Controller', Controller);

Controller.$inject = ['$scope', '$filter'];
function Controller($scope, $filter) {

    $scope.DClick = function () {
        $scope.popup = "";
        popup.classList.toggle("show");
    };
}


})();