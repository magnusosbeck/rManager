dodoModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/dodo', {templateUrl: 'modules/dodoModule/views/dodo.html', controller: 'dodoViewController'});
}]);
