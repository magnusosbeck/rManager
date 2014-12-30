accountModule.factory('accountService', ['$http', '$q', '$location', 'storageService', function ($http, $q, $location, storageService) {

    var rootUrl = 'https://api.parse.com/1/';
    $http.defaults.headers.common["X-Parse-Application-Id"] = "bN4N86WqmUekbacanQInNRpItyyngj0WHm0kbRVf";
    $http.defaults.headers.common["X-Parse-REST-API-Key"] = "eQ5UDAIOwcsoJLQJANu6gUkpmDNkKO12mdev87LH";


    
    var currentUser = storageService.load('currentUser');
    console.log(currentUser);

    var accountService = {
        login: function (userName, password) {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: rootUrl + 'login',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                params: {
                    username : userName,
                    password : password
                }
            }).
              success(function (data, status, headers, config) {
                  currentUser = data;
                  storageService.save('currentUser', data);
                  deferred.resolve(data);
              }).
              error(function (data, status, headers, config) {
                  deferred.reject('error');
              });


            return deferred.promise;

        },
        getSpecifiedUser: function (userID) {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: rootUrl + 'users/' + userID,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).
              success(function (data, status, headers, config) {
                  deferred.resolve(data);
              }).
              error(function (data, status, headers, config) {
                  deferred.reject('error');
              });


            return deferred.promise;

        },
        getUsers: function () {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: rootUrl + 'users',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).
              success(function (data, status, headers, config) {
                  deferred.resolve(data);
              }).
              error(function (data, status, headers, config) {
                  deferred.reject('error');
              });


            return deferred.promise;

        },
        register: function (userObject) {
            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: rootUrl + 'users',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: userObject
            }).
              success(function (data, status, headers, config) {
                  deferred.resolve(data);
              }).
              error(function (data, status, headers, config) {
                  deferred.reject('error');
              });


            return deferred.promise;

        },
        deleteUser: function (objectId) {
            var deferred = $q.defer();
            $http({
                method: 'DELETE',
                url: rootUrl + 'users/' + objectId,
                headers: {
                    'Content-Type': 'application/json',
                    'X-Parse-Session-Token' : currentUser.sessionToken
                }
            }).
              success(function (data, status, headers, config) {
                  deferred.resolve(data);
              }).
              error(function (data, status, headers, config) {
                  deferred.reject('error');
              });


            return deferred.promise;

        },
        getCurrentUser : function(){
            var deferred = $q.defer();
            var currentUser = storageService.load('currentUser');
            if(typeof currentUser == 'undefined'){
                $location.url('/user/login');
                return;
            }

            accountService.getSpecifiedUser(currentUser.objectId).then(function(response){
                storageService.save('currentUser', response);
                deferred.resolve(response);
            });
            return deferred.promise;
        },
        logoutCurrentUser : function(){
            currentUser = undefined;
            storageService.clear('currentUser');
            $location.url('/user/login');
        }
    };

    return accountService;
}]);
