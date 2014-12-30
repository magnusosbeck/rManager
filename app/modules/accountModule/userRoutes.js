accountModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/account/profile/:id', {templateUrl: 'modules/accountModule/views/profile.html', controller: 'profileViewController'});
    $routeProvider.when('/account/profile', {templateUrl: 'modules/accountModule/views/profile.html', controller: 'profileViewController'});
    $routeProvider.when('/account/login', {templateUrl: 'modules/accountModule/views/login.html', controller: 'accountController'});
    $routeProvider.when('/account/register', {templateUrl: 'modules/accountModule/views/register.html', controller: 'accountController'});
}]);
