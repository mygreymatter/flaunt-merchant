(function () {
    angular.module('Home', ['Authenticator'])
        .controller('HomeCtrl', ['$scope', '$rootScope', '$state', '$http', 'AuthFactory',
        function ($scope, $rootScope, $state, $http, AuthFactory) {

                $scope.isLoggedIn = AuthFactory.isLoggedIn();
                if ($scope.isLoggedIn)
                    $state.go('Dashboard');

                $scope.login = function (user) {
                    $http.post('/login', user).then(function (response) {
                        console.log("response: " + response.status);
                        AuthFactory.saveToken(response.data.token);
                        $rootScope.$emit("HideLogout", {});
                        $state.go('Dashboard');
                    }, function (err) {
                        console.log("Error");
                        if (err.status === 500)
                            $scope.errorMessage = 'User does not exist';
                    });

                };
        }]);

})();
