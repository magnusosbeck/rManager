partnerModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/partner', {templateUrl: 'modules/partnerModule/views/partner.html', controller: 'partnerViewController'});
}]);
