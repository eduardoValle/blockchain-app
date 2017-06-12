/**
 * Created by Luiz Eduardo on 12/06/2017.
 */

(function () {
    'use strict';

    angular.module('app.blockchain').controller('CriarVotacaoCtrl', ['$scope', '$state',
        function ($scope, $state) {

            $scope.votacao = {};
            $scope.votacao.nome = "";
            $scope.votacao.descricao = "Digite uma descricao para essa votação";
            $scope.votacao.candidatos = [{nome: ''}];

            $scope.adicionarCandidato = function () {
                $scope.votacao.candidatos.push({nome: ''})
            }
            
        }]);
}());