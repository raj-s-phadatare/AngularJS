// (function() {
// 'use strict';

// angular.module('ControllerAsApp', [])
// .controller('Controller', Controller);

// Controller.$inject = ['$scope'];
// function Controller($scope) {
//     $scope.dD1 = false;
//     $scope.dD2 = false;
//     $scope.dD3 = false;

//     $scope.d1Click = function () {
//         $scope.dD2 = false;
//         $scope.dD3 = false;
//         $scope.dD1 = $scope.dD1 ? false : true;
//     };

//     $scope.d2Click = function () {
//         $scope.dD1 = false;
//         $scope.dD3 = false;
//         $scope.dD2 = $scope.dD2 ? false : true;
//     };

//     $scope.d3Click = function () {
//         $scope.dD2 = false;
//         $scope.dD1 = false;
//         $scope.dD3 = $scope.dD3 ? false : true;
//     };
// }

// })();

!function(){"use strict";function d(d){d.dD1=!1,d.dD2=!1,d.dD3=!1,d.d1Click=function(){d.dD2=!1,d.dD3=!1,d.dD1=!d.dD1},d.d2Click=function(){d.dD1=!1,d.dD3=!1,d.dD2=!d.dD2},d.d3Click=function(){d.dD2=!1,d.dD1=!1,d.dD3=!d.dD3}}angular.module("ControllerAsApp",[]).controller("Controller",d),d.$inject=["$scope"]}();