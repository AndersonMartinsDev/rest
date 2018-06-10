angular.module('app')

    .controller('MenuCtrl', function ($rootScope, $location) {
        $rootScope.activetab = $location.path();

    })