/// <reference path="Scripts/angular.js" />

(function () {
    angular.module('promiseApp')
        .factory("promiseFactory", promiseFactory);

    promiseFactory.$inject = ['$timeout', '$q', '$log']

    function promiseFactory($timeout, $q, $log) {
        var obj = {
            promiseA: '',
            promiseB: ''
        }

        var promise1 = function () {
            return $timeout(function () {
                obj.promiseA = 'OK from Promise A';
            }, 2000);
        }

        var promise2 = function () {
            return $timeout(function () {
                obj.promiseB = 'OK from Promise B';
            }, 1000);
        }

        ///////////////////////////////////////////////

        var call1 = function () {
            return $timeout(function () {
                var a = 'I am a value from Call 1, I should be passed to call 2';
                return a
            }, 1000);
        }

        var call2 = function (call1Param) {
            return $timeout(function () {
                var b = call1Param + ' \nIM OK MAN :)';
                return b
            }, 1000);
        }

        ///////////////////////////////////////////////

        return {
            testQall: function () {
                return $q.all([promise1(), promise2()]).then(function () {
                    return obj
                })
            },
            call1: call1,
            call2: call2
        }

    }
})();