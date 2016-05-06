(function () {
    angular.module('Product', ['angular-filedialog'])
        .controller('ProductCtrl', ['$scope', '$http', 'fileDialog',
        function ($scope, $http, fileDialog) {
                'use strict';

                sessionStorage.setItem('state', 'Dashboard.Products');
                $scope.name = 'Product';
                var formdata = new FormData();

                $scope.addImage = function () {
                    console.log($scope.formdata);

                    fileDialog.openFile(function (files) {
                        angular.forEach(files, function (file, key) {
                            console.log('Key: ' + key + ", Value: " + file.name);
                            formdata.append(key, file);
                            console.log('FormData: ' + formdata);
                            //$scope.fd.append(key, file);
                            //progress.removeClass('hide');
                            $http.post('/upload',
                                formdata, {
                                    withCredentials: true,
                                    headers: {
                                        'Content-Type': undefined
                                    },
                                    transformRequest: angular.identity
                                }).then(function (response) {
                                console.log('Success: ' + response);
                            }, function (err) {
                                console.log('Error: ' + err);
                            });


                        });
                    });

                };
            }]);

})();
