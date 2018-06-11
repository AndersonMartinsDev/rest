

angular.module('app')
.controller('contactsCtrl',function($rootScope,$location){
    $rootScope.activetab = $location.path();
});