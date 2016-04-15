(function () {
    angular.module('Home', [])
        .controller('HomeCtrl', ['$scope', '$state', function ($scope, $state) {
            $scope.login = function (user) {
                $state.go('Dashboard');
            };
        }]);

})();
