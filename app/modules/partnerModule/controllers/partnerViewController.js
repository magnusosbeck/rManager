partnerModule.controller('partnerViewController', ['$scope', 'partnerService', '$routeParams', 'storageService', 'dodoService', function ($scope, partnerService, $routeParams, storageService, dodoService) {

    var self = this;

    self.parametes = ['initiative',
        'feelings',
        'family',
        'career',
        'wellRead',
        'selfInterest',
        'home',
        'urbane',
        'intimacy'];

    $scope.user = 'bamam';
    $scope.dodos = {};

    self.init = function () {

        $scope.partner = {};
        var currentUser = storageService.load('currentUser');
        console.log(currentUser);

        partnerService.read('gsyv8PzpdA').then(function(partnerResponse){
            $scope.partner1 = partnerResponse;
            dodoService.get().then(function(dodoResponse){

                var points = 0;
                for (var i in dodoResponse.results){
                    dodoResponse.results[i].points = (dodoResponse.results[i].size * 10);

                    for(var p in self.parametes){
                        var paramName = self.parametes[p];

                        if(typeof dodoResponse.results[i][paramName] == "undefined" || typeof $scope.partner1[paramName] == "undefined"){
                            continue;
                        }

                        dodoResponse.results[i].points += dodoResponse.results[i][paramName] * $scope.partner1[paramName];
                    }
                    if(!dodoResponse.results[i].points){
                        dodoResponse.results[i].points = 0;
                    }
                    console.log(dodoResponse.results[i].title + ' : ' + dodoResponse.results[i].points)
                }
                $scope.dodos1 = dodoResponse.results;
            });
        });

        partnerService.read('jRwxWrGhV9').then(function(partnerResponse){
            $scope.partner2 = partnerResponse;
            dodoService.get().then(function(dodoResponse){

                var points = 0;
                for (var i in dodoResponse.results){
                    dodoResponse.results[i].points = (dodoResponse.results[i].size * 10);

                    for(var p in self.parametes){
                        var paramName = self.parametes[p];

                        if(typeof dodoResponse.results[i][paramName] == "undefined" || typeof $scope.partner2[paramName] == "undefined"){
                            continue;
                        }

                        dodoResponse.results[i].points += dodoResponse.results[i][paramName] * $scope.partner2[paramName];
                    }
                    if(!dodoResponse.results[i].points){
                        dodoResponse.results[i].points = 0;
                    }
                    console.log(dodoResponse.results[i].title + ' : ' + dodoResponse.results[i].points)
                }
                $scope.dodos2 = dodoResponse.results;
            });
        });

        //if(currentUser && currentUser['partner']){
        //    //partnerService.read(currentUser['partner']['objectId']).then(function(response){
        //    partnerService.read('YV3XDxDmb2').then(function(partnerResponse){
        //        $scope.partner = partnerResponse;
        //        dodoService.get().then(function(dodoResponse){
        //
        //            var points = 0;
        //            for (var i in dodoResponse.results){
        //                dodoResponse.results[i].points = (dodoResponse.results[i].size * 20);
        //
        //                for(var p in self.parametes){
        //                    var paramName = self.parametes[p];
        //
        //                    if(typeof dodoResponse.results[i][paramName] == "undefined" || typeof $scope.partner[paramName] == "undefined"){
        //                        continue;
        //                    }
        //
        //                    dodoResponse.results[i].points += dodoResponse.results[i][paramName] * $scope.partner[paramName];
        //                }
        //                if(!dodoResponse.results[i].points){
        //                    dodoResponse.results[i].points = 0;
        //                }
        //                console.log(dodoResponse.results[i].title + ' : ' + dodoResponse.results[i].points)
        //            }
        //            $scope.dodos = dodoResponse.results;
        //        });
        //    });
        //}

    };

    self.init();

    $scope.getDodos = function(partner){

        dodoService.get().then(function(response){

            for(var i in response.results){
                response.results[i].points = 100 + (response.results[i].size * 100);
            }

            $scope.dodos = response.results;
        });

    };

}]);
