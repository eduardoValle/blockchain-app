/**
 * Created by Luiz Eduardo on 15/03/2017.
 */

(function () {
    'use strict';

    angular.module('app.blockchain').directive('menuApp', function () {
        return {
            controller: 'MenuCtrl',
            templateUrl: 'pages/menu/menu.tpl.html',
            restrict: 'E',
            scope: {
                title: '@title'
            }
        };
    });
}());
