partnerModule.factory('partnerService', ['$http', '$q', '$location', 'storageService', function ($http, $q, $location, storageService) {

    var rootUrl = 'https://api.parse.com/1/';
    var currentUser = {
        sessionToken : ''
    };
    currentUser = storageService.load('currentUser');
    $http.defaults.headers.common["X-Parse-Application-Id"] = "bN4N86WqmUekbacanQInNRpItyyngj0WHm0kbRVf";
    $http.defaults.headers.common["X-Parse-REST-API-Key"] = "eQ5UDAIOwcsoJLQJANu6gUkpmDNkKO12mdev87LH";
    $http.defaults.headers.common["X-Parse-Session-Token"] = currentUser.sessionToken;

    console.log(currentUser);

    var partnerService = {
        get: function () {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: rootUrl + "classes/Partner",
                //url: rootUrl + "functions/hello",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).
              success(function (data, status, headers, config) {
                  deferred.resolve(data);
              }).
              error(function (data, status, headers, config) {
                  deferred.reject('error');
              });


            return deferred.promise;

        }
    };

    return partnerService;
}]);
