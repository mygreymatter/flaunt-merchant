(function () {
    angular.module('FloatLabel', []).directive('floatLabel', function () {
        return {
            restrict: 'E',
            scope: {
                id: '@',
                type: '@',
                labelText: '@',
                ngModel: '='
            },
            require: 'ngModel',
            templateUrl: '/lib/float-label.html',
            link: function (scope, elems, attrs, ctrl) {

                elems.find('input').on('focus', function () {
                    console.log('focus');
                    var v = elems.find('input').val();
                    if (v.length > 0)
                        elems.find('input').removeClass('filled');
                });
                elems.find('input').on('blur', function () {
                    var v = elems.find('input').val();
                    console.log('blurred: ' + v);
                    if (v.length > 0)
                        elems.find('input').addClass('filled');
                });

                elems.find('label').on('click', function () {
                    console.log('label click');
                    elems.find('input').focus();
                });
            }
        };
    })
})();
