partnerModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/partner/:id', {templateUrl: 'modules/partnerModule/views/partner.html', controller: 'partnerViewController'});
}]);
