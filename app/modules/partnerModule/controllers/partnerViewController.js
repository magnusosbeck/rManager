partnerModule.controller('partnerViewController', ['$scope', 'partnerService', '$routeParams', 'storageService', 'dodoService', function ($scope, partnerService, $routeParams, storageService, dodoService) {

    var self = this;

    $scope.user = 'bamam';
    $scope.dodos = {};

    self.init = function () {

        $scope.partner = {};
        var currentUser = storageService.load('currentUser');
        console.log(currentUser);

        if(currentUser && currentUser['partner']){
            partnerService.read(currentUser['partner']['objectId']).then(function(response){
                $scope.partner = response;
            });
        }

    };

    self.init();

    $scope.getDodos = function(partner){

        dodoService.fetchDodoBasedOnPartner(partner).then(function(response){
            $scope.dodos = response.result;
        });

    };

}]);
