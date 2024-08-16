(function() {
'use strict';

angular.module('ControllerAsApp', [])
.controller('Controller', Controller);

Controller.$inject = ['$scope', '$document'];
function Controller($scope, $document) {
    $scope.dD1 = false;
    $scope.dD2 = false;
    $scope.dD3 = false;

    $scope.d1Click = function () {
        $scope.dD2 = false;
        $scope.dD3 = false;
        $scope.dD1 = $scope.dD1 ? false : true;
    };

    $scope.d2Click = function () {
        $scope.dD1 = false;
        $scope.dD3 = false;
        $scope.dD2 = $scope.dD2 ? false : true;
    };

    $scope.d3Click = function () {
        $scope.dD2 = false;
        $scope.dD1 = false;
        $scope.dD3 = $scope.dD3 ? false : true;
    };

    $document.on('click', function() {
        $scope.$apply(function() {
            $scope.isDropdownOpen = false;
        });
    });

    $scope.$on('$destroy', function() {
        $document.off('click');
    });
}

})();