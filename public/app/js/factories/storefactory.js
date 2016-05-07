(function () {
    angular.module('StoresModule', ['Authenticator'])
        .factory('StoreFactory', ['$http', 'AuthFactory', function ($http, AuthFactory) {
            var o = {
                stores: []
            };

            o.getAllStores = function (id) {
                //console.log('Get Stores of merchant: ' + id);
                return $http.get('/store', {
                    _id: id,
                    isMerchantId: true
                }).then(function (response) {
                    //console.log('Success: ' + response.data);
                    return angular.copy(response.data, o.stores);
                }, function (error) {
                    console.log('Getting stores Error: ' + error);
                });
            };

            o.getStore = function (id) {
                console.log('Get Stores in StoreFactory');
                return $http.get('/store', {
                    'id': id
                }).then(function (response) {
                    console.log('Success: ' + response.data);
                    return response.data;
                }, function (error) {
                    console.log('Getting stores Error: ' + error);
                });
            };
            return o;

            }]);
})();
