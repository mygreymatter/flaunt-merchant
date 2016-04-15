(function () {
    angular.module('merchantapp', ['ui.router', 'Home', 'FloatLabel', 'Dashboard', 'Navigator'])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
            function ($stateProvider, $urlRouterProvider, $locationProvider) {
                $stateProvider
                    .state('Home', {
                        url: '/',
                        templateUrl: '/app/views/home.html',
                        controller: 'HomeCtrl'
                    }).state('Dashboard', {
                        url: '/dashboard',
                        templateUrl: '/app/views/dashboard.html',
                        controller: 'DashboardCtrl'
                    });


                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                });
                $urlRouterProvider.otherwise('/');
            }]);
})();
