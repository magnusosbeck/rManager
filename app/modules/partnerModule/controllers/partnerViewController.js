partnerModule.controller('partnerViewController', ['$scope', 'accountService', '$routeParams', function ($scope, accountService, $routeParams) {

    var self = this;



    self.init = function () {


           if($routeParams.id){
               accountService.getSpecifiedUser($routeParams.id).then(function(response){
                   $scope.user = response;
               });
           }else{
               accountService.getCurrentUser().then(function(user){
                   $scope.user = user;
               });
            }

    };
    self.init();

}]);
