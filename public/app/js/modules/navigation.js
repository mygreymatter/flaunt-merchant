(function () {
    angular.module('Navigator', ['Authenticator'])
        .controller('NavCtrl', ['$scope', '$rootScope', '$state', 'AuthFactory',
            function ($scope, $rootScope, $state, AuthFactory) {

                $scope.isLoggedIn = AuthFactory.isLoggedIn();

                $rootScope.$on("HideLogout", function () {
                    console.log('Hide Logout');
                    $scope.isLoggedIn = AuthFactory.isLoggedIn();

                });

                $scope.logout = function () {
                    console.log('Logged out');
                    AuthFactory.logout();
                    $state.go('Home');
                    $scope.isLoggedIn = AuthFactory.isLoggedIn();
                };
        }]);
})();
