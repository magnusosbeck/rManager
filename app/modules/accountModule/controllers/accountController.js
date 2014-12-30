accountModule.controller('accountController', ['$scope', 'accountService', '$location', function ($scope, accountService, $location) {

    var self = this;

    self.init = function () {
        $scope.input = {
            username: undefined,
            password: undefined,
            email: undefined,
            response: undefined
        };
    };
    self.init();


    //action button for login
    $scope.login = function () {
        if (typeof $scope.input.username == 'undefined' || typeof $scope.input.password == 'undefined') {
            alert('Fill in username and password');
            return;
        }
        accountService.login($scope.input.username, $scope.input.password).then(function (response) {
            $scope.input.response = response;
        });
    };

    //action button for register
    $scope.register = function () {
        accountService.register(
          {
              username: $scope.input.username,
              password: $scope.input.password,
              email: $scope.input.email
          }
        ).then(function (response) {
              $scope.input.response = response;
          });
    };

    $scope.go = function(path){
        $location.url(path);
    }

}]);
