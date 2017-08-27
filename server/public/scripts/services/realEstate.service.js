app.service('RealEstateService', ['$http', function($http){
    console.log('service loaded');

    var self = this;
    self.listings = [];
    self.rentals = [];

    self.getListings = function(){
        return $http({
            method: 'GET',
            url: '/listings',
        }).then(function (response) {
            return self.listings = response.data;
        });
    };

    self.getRentals = function(){
        $http({
            method: 'GET',
            url: '/rentals',
        }).then(function (response) {
            console.log(response);
            console.log(response.data);
            self.rentals = response.data;
        });
    };
}]);