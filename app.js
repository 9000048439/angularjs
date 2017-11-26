var module = angular.module("myApp", []);
module.controller("MainCtrl", Main);

function Main($scope) {
    $scope.hourOfDay = 9;
    $scope.updateTime = function(){
        $scope.CurrentDate = new Date();
        
    }
    console.log("Main Called........");
}