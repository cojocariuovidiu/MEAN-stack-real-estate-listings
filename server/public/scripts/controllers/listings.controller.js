app.controller('ListingsController',['RealEstateService', function(RealEstateService){
    console.log('listings controller loaded');

     var self = this;
     self.listings = [];
     getListingsFromService();
;
     function getListingsFromService() {
        RealEstateService.getListings().then(function(response) {
            self.listings = response;
            console.log('listings!', self.listings)
        });
    };

    self.addListingFromService = function(newListing){
        RealEstateService.addListing(newListing);
    };
     
}]);
