(function () {
    angular.module('merchantapp', ['ui.router', 'Home', 'FloatLabel', 'Dashboard'])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
            function ($stateProvider, $urlRouterProvider, $locationProvider) {
                $stateProvider
                    .state('Home', {
                        url: '/store',
                        templateUrl: '/merchant/views/home.html',
                        controller: 'HomeCtrl'
                    }).state('Dashboard', {
                        url: '/store/dashboard',
                        templateUrl: '/merchant/views/dashboard.html',
                        controller: 'DashboardCtrl'
                    });


                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                });
                $urlRouterProvider.otherwise('/');
            }]);
})();
