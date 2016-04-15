(function () {
    angular.module('Dashboard', ['Authenticator'])
        .controller('DashboardCtrl', ['$scope', '$state', 'AuthFactory',
            function ($scope, $state, AuthFactory) {

                if (!AuthFactory.isLoggedIn())
                    $state.go('Home');


    }]);
})();
