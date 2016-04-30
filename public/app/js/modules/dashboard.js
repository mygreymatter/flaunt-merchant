(function () {
    angular.module('Dashboard', ['Authenticator'])
        .controller('DashboardCtrl', ['$scope', '$rootScope', '$state', 'AuthFactory',
            function ($scope, $rootScope, $state, AuthFactory) {
                console.log('Dashboard.js');
                $scope.menu_items = [
                    {
                        "pos": 0,
                        "name": "Dashboard",
                        "state": "Home"
                    }, {
                        "pos": 1,
                        "name": "Stores",
                        "state": "Stores"
                    }, {
                        "pos": 2,
                        "name": "Products",
                        "state": "Products"
                    }, {
                        "pos": 3,
                        "name": "Statistics",
                        "state": "Statistics"
                    }, {
                        "pos": 4,
                        "name": "Reports",
                        "state": "Reports"
                    }
                ];

                $scope.activeMenuItem = 0;

                if (!AuthFactory.isLoggedIn())
                    $state.go('Home');
                else {
                    var state = sessionStorage.getItem('state');
                    if (state === null) {
                        $state.go('Dashboard.Home');
                    } else {
                        $scope.menu_items.forEach(function (e) {
                            if (state.indexOf(e.name) > -1)
                                $scope.activeMenuItem = e.pos;
                        });

                        if (state.indexOf('StoresEditor') > -1)
                            state = 'Dashboard.Stores';

                        $state.go(state);
                    }

                }




                $scope.clicked = function (p) {
                    $scope.activeMenuItem = p;
                    if (p === 0)
                        sessionStorage.setItem('state', 'Dashboard.Home');
                };

                $rootScope.$on("StateChange", function (event, O) {
                    console.log('State Changed: ' + O.state);
                    $state.go('Dashboard.StoresEditor');
                });

                console.log("State: " + sessionStorage.getItem('state'));

    }]);
})();
