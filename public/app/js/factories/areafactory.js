(function () {
    angular.module('AreasModule', [])
        .factory('AreaFactory', ['$http', function ($http) {
            var o = {
                areas: []
            };

            o.getAllAreas = function () {
                return $http.get('/area').then(function (response) {
                    //console.log('Success: ' + response.data);
                    return angular.copy(response.data, o.areas);
                }, function (error) {
                    console.log('Getting areas Error: ' + error);
                });
            };

            o.getArea = function (id) {
                console.log('Get Areas in AreaFactory');
                return $http.get('/area', {
                    'id': id
                }).then(function (response) {
                    console.log('Success: ' + response.data);
                    return response.data;
                }, function (error) {
                    console.log('Getting areas Error: ' + error);
                });
            };
            return o;

            }]);
})();
