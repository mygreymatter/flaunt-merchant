(function () {
    'use strict'
    angular.module('merchantapp', ['ui.router', 'Home', 'FloatLabel', 'Dashboard', 'Navigator', 'Stores'])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
            function ($stateProvider, $urlRouterProvider, $locationProvider) {
                $stateProvider
                    .state('Home', {
                        url: '/',
                        templateUrl: '/app/views/home.html',
                        controller: 'HomeCtrl'
                    }).state('Dashboard', {
                        /*url: '/dashboard',*/
                        templateUrl: '/app/views/dashboard.html',
                        controller: 'DashboardCtrl'
                    }).state('Dashboard.Home', {
                        /*url: '/home',*/
                        templateUrl: '/app/views/dashboard-home.html',
                        controller: ''
                    }).state('Dashboard.Stores', {
                        /*url: '/stores',*/
                        templateUrl: '/app/views/stores.html',
                        controller: 'StoresCtrl'
                    }).state('Dashboard.StoresEditor', {
                        /*url: '/stores/editor',*/
                        templateUrl: '/app/views/stores-editor.html',
                        params: {
                            'editor_type': null
                        },
                        controller: 'StoresEditorCtrl'
                    }).state('Dashboard.Products', {
                        /*url: '/products',*/
                        templateUrl: '/app/views/products.html',
                        controller: ''
                    }).state('Dashboard.Statistics', {
                        /*url: '/statistics',*/
                        templateUrl: '/app/views/statistics.html',
                        controller: ''
                    }).state('Dashboard.Reports', {
                        /*url: '/reports',*/
                        templateUrl: '/app/views/reports.html',
                        controller: ''
                    });


                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                });
                $urlRouterProvider.otherwise('/');
            }])
        .run(['$location', '$state', '$window', function ($location, $state, $window) {
            console.log('State: ' + sessionStorage.getItem('state'));
            console.log('Run: ' + $location.path() + " " + $location.hash());
            var windowElement = angular.element($window);
            window.onbeforeunload = function (event) {
                // do whatever you want in here before the page unloads.        
                console.log('BeforeUnload');
                // the following line of code will prevent reload or navigating away.
                event.preventDefault();
            };
            }]);
})();
