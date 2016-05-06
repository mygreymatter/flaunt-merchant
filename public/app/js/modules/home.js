(function () {
    angular.module('Home', ['Authenticator'])
        .controller('HomeCtrl', ['$scope', '$rootScope', '$state', '$http', 'AuthFactory',
        function ($scope, $rootScope, $state, $http, AuthFactory) {
                console.log("HomeCtrl");
                $scope.toBeLogin = true;

                $scope.showSignup = function () {
                    console.log('show signup');
                    $scope.toBeLogin = false;
                };

                $scope.showLogin = function () {
                    console.log('show login');
                    $scope.toBeLogin = true;
                };

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

                $scope.signup = function (user) {
                    console.log("User: " + user);

                    $http.post('/signup', user).then(function (response) {
                        console.log("SignUp: " + response.status);
                        $state.go('Dashboard');

                        $scope.toBeLogin = true;

                    }, function (err) {
                        console.log("Error");
                        if (err.status === 500)
                            $scope.errorMessage = 'User already exists';
                    });
                };

        }]);

})();
