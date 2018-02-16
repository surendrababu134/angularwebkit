var myapp = angular.module('product', ['ui.router']);


myapp.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
            url: '/home',
            templateUrl: '/components/producthome.html',
            controller:'loginCtrl'
    })

}]);

myapp.controller('loginCtrl', function() {  

    
});  
