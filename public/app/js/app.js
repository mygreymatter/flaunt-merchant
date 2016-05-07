(function () {
    'use strict'
    angular.module('merchantapp', ['ui.router', 'Home', 'FloatLabel', 'Dashboard', 'Navigator', 'Stores', 'Product'])
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
                        controller: 'StoresCtrl',
                        resolve: {
                            stores: function (AuthFactory, StoreFactory) {
                                return StoreFactory.getAllStores(AuthFactory.currentUser()._id);
                            }
                        }
                    }).state('Dashboard.StoresEditor', {
                        /*url: '/stores/editor',*/
                        templateUrl: '/app/views/stores-editor.html',
                        params: {
                            'isEditMode': false,
                            'store': null
                        },
                        controller: 'StoresEditorCtrl',
                        resolve: {
                            areas: function (AreaFactory) {
                                return AreaFactory.getAllAreas();
                            }
                        }
                    }).state('Dashboard.Products', {
                        /*url: '/products',*/
                        templateUrl: '/app/views/products.html',
                        controller: 'ProductCtrl'
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
            }]);

})();
