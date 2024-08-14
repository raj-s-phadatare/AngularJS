(function() {
'use strict';

angular.module('ControllerAsApp', [])
.controller('Controller', Controller);

Controller.$inject = ['$scope'];
function Controller($scope) {
    $scope.d1Click = function () {
        $scope.dD1.classList.toggle("show");
    };

    $scope.d2Click = function () {
        $scope.dD2.classList.toggle("show");
    };

    $scope.d3Click = function () {
        $scope.dD3.classList.toggle("show");
    };

    window.onclick = function (e) {
        if(!e.target.matches('.dropdown'))
        {
            if ($scope.dD1.classList.contains('show')) {
                $scope.dD1.remove('show');
            }
            else if ($scope.dD2.classList.contains('show')) {
                $scope.dD2.remove('show');
            }
            else if ($scope.dD3.classList.contains('show')) {
                $scope.dD3.remove('show');
            }
        }
    }
}

})();