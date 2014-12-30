partnerModule.controller('partnerViewController', ['$scope', 'partnerService', '$routeParams', function ($scope, partnerService, $routeParams) {

    var self = this;

    $scope.user = 'bamam';

    self.init = function () {

        partnerService.get().then(function(response){
            $scope.partners = response.results;
        });


           //
           //if($routeParams.id){
           //    accountService.getSpecifiedUser($routeParams.id).then(function(response){
           //        $scope.user = response;
           //    });
           //}else{
           //    accountService.getCurrentUser().then(function(user){
           //        $scope.user = user;
           //    });
           // }

    };
    self.init();

}]);
