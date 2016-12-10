(function () {
    angular.module('promiseApp')
        .controller('promiseController', promiseController);


    promiseController.$inject = ['$log', 'promiseFactory'];

    function promiseController($log, promiseFactory) {
        var vm = this;
        vm.msg = 'check console windows';

        promiseFactory.testQall().then(function (d) {
            console.log(d);
        });

        /////////////

        promiseFactory.call1().then(function (a) {
            return promiseFactory.call2(a)
        })
        .then(function (b) {
            console.log(b); 
        })
    }

})();