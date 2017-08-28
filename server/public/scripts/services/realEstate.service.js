app.service('RealEstateService', ['$http', function($http){
    console.log('service loaded');

    var self = this;
    self.listings = [];
    
    self.rentals = {
        list: []
    };

    //alternative GET call that works with just an empty array
    self.getListings = function(){
        return $http({
            method: 'GET',
            url: '/listings',
        }).then(function (response) {
            return self.listings = response.data;
        });
    };

    self.addListing = function(newListing){
        return $http({
            method: 'POST',
            url: '/listings',
            data: newListing
        }).then(function (response) {
            console.log('service post response: ', response.data); 
            self.getListings();
        });       
    };


    //long form GET
    self.getRentals = function(){
        $http({
            method: 'GET',
            url: '/rentals',
        }).then(function (response) {
            console.log(response);
            console.log(response.data);
            self.rentals.list = response.data;
        });
    };

// short form GET
// self.getRentals = function(){
//     $http.get('/rentals').then(function (response) {
//         self.rentals.list = response.data;
//     })
// }


}]);