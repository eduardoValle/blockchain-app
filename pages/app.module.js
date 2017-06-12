/**
 * Created by Luiz Eduardo on 30/05/2017.
 */

(function () {
    'use strict';

    angular.module('app.blockchain', ['ui.router', 'infinite-scroll'])
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('splash', {
                url: '/',
                templateUrl: 'pages/splash/splash.tpl.html',
                controller: 'SplashCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'pages/login/login.tpl.html',
                controller: 'LoginCtrl'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'pages/home/home.tpl.html',
                controller: 'HomeCtrl'
            })
            .state('criarvotacao', {
                url: '/criarvotacao',
                templateUrl: 'pages/criar-votacao/criarVotacao.tpl.html',
                controller: 'CriarVotacaoCtrl'
            })
            .state('historico', {
                url: '/historico',
                templateUrl: 'pages/historico/historico.tpl.html',
                controller: 'HistoricoCtrl'
            });
    }
}());
