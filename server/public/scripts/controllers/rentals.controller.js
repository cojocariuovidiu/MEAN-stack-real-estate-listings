app.controller('RentalsController', ['RealEstateService', function(RealEstateService){
    console.log('rentalsController loaded');
    var self = this;
    self.rentals = RealEstateService.rentals;
    getRentalsFromService();


    function getRentalsFromService (){
        RealEstateService.getRentals();
        console.log('rentals!', self.rentals)
    };

    self.addRentalFromService = function(newRental){
        RealEstateService.addRental(newRental);
    };

}]);