/**
 * Created by Luiz Eduardo on 31/05/2017.
 */

(function () {
    'use strict';

    angular.module('app.blockchain').controller('LoginCtrl', ['$scope', '$state',
        function ($scope, $state) {
            $scope.login = function () {
                $state.go('home');
            }
        }]);
}());