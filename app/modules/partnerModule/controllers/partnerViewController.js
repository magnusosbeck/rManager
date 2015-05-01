partnerModule.controller('partnerViewController', ['$scope', 'partnerService', '$routeParams', 'storageService', function ($scope, partnerService, $routeParams, storageService) {

    var self = this;

    $scope.user = 'bamam';

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

}]);
