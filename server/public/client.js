var app = angular.module('realEstateApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    console.log('Route config loaded');

    $routeProvider.when('/',
        { templateUrl: 'views/home.html' }
    ).when('/rentals', {
        templateUrl: 'views/rentals.html',
        controller: 'RentalsController',
        controllerAs: 'vm'
    }).when('/listings', {
        templateUrl: 'views/listings.html',
        controller: 'ListingsController',
        controllerAs: 'vm'
    })
}])