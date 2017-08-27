app.controller('ListingsController',['RealEstateService', function(RealEstateService){
    console.log('listings controller loaded');

     var self = this;
     self.listings = [];
     getListingsFromService();
     


    //  self.getListings = function(){
    //      RealEstateService.getListings();
    //  };

     function getListingsFromService() {
        RealEstateService.getListings().then(function(response) {
            self.listings = response;
            console.log('listings!', self.listings)
        });
     }
}]);
