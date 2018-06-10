
var app = angular.module('app',["ngRoute"]);

app.controller('HomeCtrl',function($rootScope,$location){
    $rootScope.activetab= $location.path();
});