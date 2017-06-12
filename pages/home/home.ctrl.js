/**
 * Created by Luiz Eduardo on 31/05/2017.
 */

(function () {
    'use strict';

    angular.module('app.blockchain').controller('HomeCtrl', ['$scope', '$state',
        function ($scope, $state) {

            console.log('HomeCtrl');


            $scope.criarVotacaoCtrl = function () {
                $state.go('criarvotacao');
            };

            $scope.historico = function () {
                $state.go('historico');
            };
        }]);
}());