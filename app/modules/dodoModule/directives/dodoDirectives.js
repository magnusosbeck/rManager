/**
 * Created by mange on 15-05-09.
 */

dodoModule.directive('colorByParameter',[function () {
    return {
        restrict: 'A',
        scope : {
            colorByParameter : '='
        },
        replace: false,
        interpolate: true,
        link: function (scope, elm, attr) {



            //Calculate highest value and color it but dodo object
            var parameterValue = 0;
            if(typeof scope.colorByParameter == "object"){
                for(var i in scope.colorByParameter){
                    if(typeof scope.colorByParameter[i] == "number" && scope.colorByParameter[i] <= 10){
                        if(typeof scope.parameterColors[i] != "undefined"){

                            var currentValue = scope.colorByParameter[i];
                            if(currentValue > parameterValue){
                                elm.css('color', scope.parameterColors[i]);
                                parameterValue = currentValue;
                            }
                        }
                    }
                }
            }

            //color strings and lables
            if(typeof scope.colorByParameter == "string"){
                var elmClasses = attr.class;

                if(elmClasses.match('label')){
                    elm.css('background-color', scope.parameterColors[scope.colorByParameter]);
                }else{
                    elm.css('color', scope.parameterColors[scope.colorByParameter]);
                }
            }





        },
        controller: ['$scope',function ($scope) {
            $scope.parameterColors = {
                'initiative' : '#952cc9',
                'feelings' : '#d22e8e',
                'family' : '#ee3434',
                'career' : '#ee7f34',
                'wellRead' : '#eea434',
                'selfInterest' : '#eec934',
                'home' : '#b1db30',
                'urbane' : '#2cc92c',
                'intimacy' : '#2ca2c9'
                //'reservedOne' : '#2c6dc9',
                //'reservedTwo' : '#462cc9'
            };
        }]
    };
}]);