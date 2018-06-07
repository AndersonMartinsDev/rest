(function () {
    const app = angular.module('app',[]);


    const configuration = ($stateProvider, $urlRouterProvider, $locationProvider) => {

        $locationProvider.html5Mode(true);
        /*const rotaPrincipal = {
            name: "principal",
            url: "/home",
            component: "home"
        }
        const rotaMenu = {
            name: "menu",
            url: "/menu",
            component: "menu"
        }
        const sobreNos = {
            name: "about",
            url: "/aboutUs",
            component: "aboutUs"
        }
        const contato = {
            name: "contato",
            url: "contact",
            component: "contato"
        }*/

        $routeProvider.when('/',{
            templateUrl:'app/js/home/home.html',
            controller:'showHomeCtrl'
        })
        /*$stateProvider.state(rotaPrincipal);
        $stateProvider.state(rotaMenu);
        $stateProvider.state(sobreNos);
        $stateProvider.state(contato);
        $urlRouterProvider.otherwise('/home');*/
        $routeProvider.otherwise({redirecTo:'/'});
        
    }
    injetor(configuration);

})()

function injetor(configuration) {
    configuration.$inject = ['$stateProvider', 'urlRouterProvider'];
}
