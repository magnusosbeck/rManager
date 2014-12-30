dodoModule.controller('dodoViewController', ['$scope', 'dodoService', '$routeParams', function ($scope, dodoService, $routeParams) {

    var self = this;

    self.init = function () {

        dodoService.get().then(function(response){
            $scope.dodos = response.results;
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
