(function () {
    angular.module('Stores', [])
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


        }]).controller('StoresEditorCtrl', ['$scope', '$state', function ($scope, $state) {
            sessionStorage.setItem('state', 'Dashboard.StoresEditor');
            $(angular.element('#datetimepicker')).datetimepicker({
                format: 'D/MM/YYYY'
            });
            $scope.title = $state.params.editor_type;
            $scope.store = {};

            $scope.areas = [{
                name: "Jayanagar 1st Block",
                pincode: 540011
                }, {
                name: "Jayanagar 2nd Block",
                pincode: 540011
                }, {
                name: "Jayanagar 3rd Block",
                pincode: 540011
                }, {
                name: "Jayanagar 4th Block",
                pincode: 540011
                }, {
                name: "Jayanagar 4th T Block",
                pincode: 540011
                }, {
                name: "Jayanagar 5th Block",
                pincode: 540011
                }, {
                name: "Jayanagar 6th Block",
                pincode: 540011
                }, {
                name: "Jayanagar 7th Block",
                pincode: 540011
                }, {
                name: "Jayanagar 8th Block",
                pincode: 540011
                }, {
                name: "Jayanagar 9th Block",
                pincode: 540011
                }];

            $scope.selected = $scope.areas[0];
            $scope.store.types = [{
                name: 'Clothing',
                checked: false
            }, {
                name: 'Bags',
                checked: false
            }, {
                name: 'Footwear',
                checked: false
            }, {
                name: 'Accessories',
                checked: false
            }];


            $scope.goToStore = function () {
                $state.go('Dashboard.Stores');
            };

            $scope.createStore = function (store) {
                store.date = $(angular.element('#datetimepicker>input')).val();

                for (var k in store) {
                    if (k === 'types') {
                        for (var t in $scope.store.types) {
                            console.log(t + ' ' + $scope.store.types[t].name + ' ' + $scope.store.types[t].checked);
                        }
                    } else
                        console.log(k + ': ' + store[k]);
                }

                $state.go('Dashboard.Stores');
            };

    }]);

})();
