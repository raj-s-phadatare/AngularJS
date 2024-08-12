(function() {
'use strict';

angular.module('ControllerAsApp', [])
.controller('Controller', Controller);

Controller.$inject = ['$scope', '$filter'];
function Controller($scope, $filter) {

    function DClick() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }
    
}


})();