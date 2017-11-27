var module = angular.module("myApp", []);
module.controller("MainCtrl", Main);

function Main($scope) {
    $scope.hourOfDay = 9;
    $scope.updateTime = function(){
        $scope.CurrentDate = new Date();
        
    }
    console.log("Main Called........");
}
//the below context is for ngModel-exmaples

var app = angular.module("ngModelExamples", []);
app.controller("ExamplesCtrl",ExamplesCtrl);

function ExamplesCtrl(){

}
