
var app = angular.module('app',[]);

app.controller('HomeCtrl',function($rootScope,$location){
    $rootScope.activetab= $location.path();
});