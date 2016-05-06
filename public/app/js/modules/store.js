(function () {
    angular.module('Stores', ['AreasModule'])
        .controller('StoresCtrl', ['$scope', '$rootScope', '$state',
        function ($scope, $rootScope, $state) {
                sessionStorage.setItem('state', 'Dashboard.Stores');
                $scope.branches = ['Jayanagar', 'J.P.Nagar 1st Phase', 'Banshankari 3rd Phase'];
                $scope.createStore = function () {
                    /*$rootScope.$emit("StateChange", {
                        'state': 'store_editor'
                    });*/
                    $state.go('Dashboard.StoresEditor', {
                        'editor_type': 'Create New'
                    });
                };


        }]).controller('StoresEditorCtrl', ['$scope', '$http', '$state', 'AreaFactory', 'areas',
           function ($scope, $http, $state, AreaFactory, areas) {
                sessionStorage.setItem('state', 'Dashboard.StoresEditor');
                $scope.areas = areas;

                areas.forEach(function (area) {
                    console.log('Area: ' + area.name);
                });

                $(angular.element('#datetimepicker')).datetimepicker({
                    format: 'D/MM/YYYY'
                });
                $scope.title = $state.params.editor_type;
                $scope.store = {};

                $scope.selected = $scope.areas[0];
                $scope.store.types = [{
                    "name": 'Clothing',
                    "checked": false
            }, {
                    "name": 'Bags',
                    "checked": false
            }, {
                    "name": 'Footwear',
                    "checked": false
            }, {
                    "name": 'Accessories',
                    "checked": false
            }];


                $scope.goToStore = function () {
                    $state.go('Dashboard.Stores');
                };

                $scope.createStore = function (store) {
                    store.date = $(angular.element('#datetimepicker>input')).val();

                    $http.post('/store', store)
                        .then(function (response) {
                            console.log('Store created successfully: ' + store.name);
                            $state.go('Dashboard.Stores');
                        }, function (err) {

                        });


                };

    }]);

})();
