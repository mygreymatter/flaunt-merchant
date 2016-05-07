(function () {
    angular.module('Stores', ['AreasModule', 'Authenticator', 'StoresModule'])
        .controller('StoresCtrl', ['$scope', '$state', 'AuthFactory', 'StoreFactory', 'stores',

        function ($scope, $state, AuthFactory, StoreFactory, stores) {

                sessionStorage.setItem('state', 'Dashboard.Stores');
                $scope.stores = stores;

                $scope.createStore = function () {
                    $state.go('Dashboard.StoresEditor', {
                        isEditMode: false,
                        store: null
                    });
                };

                $scope.editStore = function (store) {
                    $state.go('Dashboard.StoresEditor', {
                        isEditMode: true,
                        store: store
                    });
                };

        }]).controller('StoresEditorCtrl', ['$scope', '$http', '$state', 'AreaFactory', 'areas', 'AuthFactory',
           function ($scope, $http, $state, AreaFactory, areas, AuthFactory) {
                sessionStorage.setItem('state', 'Dashboard.StoresEditor');
                $scope.isEditMode = $state.params.isEditMode;
                $scope.areas = areas;
                $scope.store = {};

                $scope.store.types = {
                    Clothing: false,
                    Bags: false,
                    Footwear: false,
                    Accessories: false
                };

                var date = $(angular.element('#datetimepicker'));

                if (!$scope.isEditMode) {
                    $scope.title = 'Create New';
                    date.datetimepicker({
                        format: 'D/MM/YYYY'
                    });

                    $scope.selected = $scope.areas[0];

                    $scope.createStore = function (store) {

                        store.area = $scope.selected.name;
                        store.date_of_establishment = date.data('DateTimePicker').date()._d;
                        store.merchant_id = AuthFactory.currentUser()._id;

                        $http.post('/store', store)
                            .then(function (response) {
                                console.log('Store created successfully: ' + store.name);
                                $state.go('Dashboard.Stores');
                            }, function (err) {
                                console.log("Failed creating store: " + err);
                            });

                    };
                } else {
                    $scope.title = 'Edit Store';
                    $scope.store = $state.params.store;
                    date.datetimepicker({
                        defaultDate: new Date($scope.store.date_of_establishment)
                    });

                    $scope.store.types = {
                        Clothing: false,
                        Bags: false,
                        Footwear: false,
                        Accessories: false
                    };

                    $scope.store.business_type.forEach(function (type) {
                        Object.keys($scope.store.types).forEach(function (storeType) {
                            if (storeType === type) {
                                $scope.store.types[type] = true;
                            }
                        });
                    });

                    $scope.areas.forEach(function (area) {
                        if (area.name === $scope.store.area_name)
                            $scope.selected = area;
                    });

                    $scope.updateStore = function (store) {
                        store.area = $scope.selected.name;
                        store.date_of_establishment = date.data('DateTimePicker').date()._d;
                        store.merchant_id = AuthFactory.currentUser()._id;

                        $http.put('/store', store)
                            .then(function (response) {
                                console.log('Store created successfully: ' + store.name);
                                $state.go('Dashboard.Stores');
                            }, function (err) {
                                console.log("Failed creating store: " + err);
                            });
                    };

                }
                $scope.goToStore = function () {
                    $state.go('Dashboard.Stores');
                };
                        }]);
})();
