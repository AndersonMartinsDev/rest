(function () {
    var app = angular.module('app', [])

    const showHome = {
        controller: "homeController",
        templateUrl: "../app/js/home/home.html"
    }
        app.component('home',showHome);
})()