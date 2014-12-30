'use strict';

// Declare app level module which depends on views, and components

var accountModule = angular.module('accountModule', []);
var partnerModule = angular.module('partnerModule', []);

angular.module('myApp', [
  'ngRoute',
  'myApp.version',
  'accountModule',
  'partnerModule'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]).factory('storageService', ['$log', '$rootScope', function ($log, $rootScope) {
      var localStorageMaxCount = 10;
      var storageService = {
          save: function (storageName, data) {
              localStorage[storageName] = JSON.stringify(data);
              if (localStorage.length > localStorageMaxCount) {
                  $log.warn('local storage count (length) is over 10, this may be a bug, please check it out - Message from StorageService');
              }

              $rootScope.$broadcast(storageName, data);

              return data;
          },
          load: function (storageName) {

              var storedData = localStorage[storageName];

              if (typeof storedData !== "undefined") {
                  return JSON.parse(storedData);
              } else {
                  return undefined;
              }
          },
          clear: function (storageName) {

              delete localStorage[storageName];

              $rootScope.$broadcast(storageName);

              return undefined;
          },
          swipeAll: function () {
              localStorage.clear();
              return 'localStorage is cleared!';
          },
          status: function () {
              $log.info('Current status -> localstorage: ', localStorage);
          }
      };
      return storageService;
  }]).config(['$sceProvider', function($sceProvider) {
// Completely disable SCE.  For demonstration purposes only!
// Do not use in new projects.
      $sceProvider.enabled(false);
  }]);
