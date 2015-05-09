partnerModule.controller('partnerViewController', ['$scope', 'partnerService', '$routeParams', 'storageService', 'dodoService', function ($scope, partnerService, $routeParams, storageService, dodoService) {

    var self = this;

    $scope.user = 'bamam';
    $scope.dodos = {};

    self.init = function () {

        $scope.partner = {};
        var currentUser = storageService.load('currentUser');
        console.log(currentUser);

        if(currentUser && currentUser['partner']){
            //partnerService.read(currentUser['partner']['objectId']).then(function(response){
            partnerService.read('YV3XDxDmb2').then(function(response){
                $scope.partner = response;
            });
        }
        dodoService.get().then(function(response){

            for(var i in response.results){
                response.results[i].points = 100 + (response.results[i].size * 100);
            }

            $scope.dodos = response.results;
        });

    };

    self.init();

    $scope.getDodos = function(partner){

        dodoService.get().then(function(response){

            for(var i in response.results){
                response.results[i].points = 100 + (response.results[i].size * 100);
            }

            $scope.dodos = response.results;
        });

    };

}]);
