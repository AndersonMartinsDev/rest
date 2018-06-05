(function(){
    const app = angular.module('app');

    const configuration = ($stateProvider,$urlRouterProvider,$locationProvider)=>{
        const rotaPrincipal = {
            name:"principal",
            url:"/",
            component:"home"
        }
        const rotaMenu = {
            name:"menu",
            url:"/menu",
            component:"menu"
        }
        const sobreNos ={
            name:"about",
            url:"/aboutUs",
            component:"aboutUs"
        }
        const contato = {
            name:"contato",
            url:"contact",
            component:"contato"
        }
        $stateProvider.state(rotaPrincipal);
        $stateProvider.state(rotaMenu);
        $stateProvider.state(sobreNos);
        $stateProvider.state(contato);
        $urlRouterProvider.otherwise('/');
    }
    configuration.$inject = ["$stateProvider","urlRouterProvider"];
    app.config(configuration);
})();