
(function()
{

    var app = angular.module('app',['ngRoute']);

    app.config(function ($routeProvider, $locationProvider) {
    
        $locationProvider.html5Mode(true);
    
        $routeProvider
    
            .when('/home', {
                templateUrl: 'app/js/home/home.html',
                controller: 'HomeCtrl'
            })
            .when('/menu', {
                templateUrl: 'app/js/food-book/menu.html',
                controller: 'MenuCtrl'
            })
            .when('/contatos', {
                templateUrl: 'app/js/contacts/contacts.html',
                controller: 'ContactsCtrl'
            })
    
            .otherwise({ redirectTo: '/home' });
            
    });


})();

