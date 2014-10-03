/**
 * Created by kim on 03-10-2014.
 */
var happinessControllers = angular.module('happinessControllers', []);

happinessControllers.controller('HappinessCtrl', ['$scope',
    function ($scope) {
        $scope.vote = function () {
            alert ("Du har stemt");
        }

    }]);
