/**
 * Created by Luiz Eduardo on 31/05/2017.
 */

(function () {
    'use strict';

    angular.module('app.blockchain').controller('SplashCtrl', ['$state',
        function ($state) {
            setTimeout(function () {
                $state.go('login')
            }, 3000);
        }]);
}());