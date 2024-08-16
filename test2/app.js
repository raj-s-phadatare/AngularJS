(function() {
'use strict';

angular.module('ControllerAsApp', [])
.controller('Controller', Controller);

Controller.$inject = ['$scope'];
function Controller($scope) {
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
}

angular.module('ControllerAsApp', [])
.directive('closeOnClick', function($document) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            function handleClick(event) {
                if (!element[0].contains(event.target)) {
                    scope.$apply(function() {
                        scope.dD1 = false;
                        scope.dD2 = false;
                        scope.dD3 = false;
                    });
                }
            }

            $document.on('click', handleClick);

            scope.$on('$destroy', function() {
                $document.off('click', handleClick);
            });
        }
    };
});

})();