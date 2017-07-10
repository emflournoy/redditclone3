
(function() {
  'use strict'
console.log('cheese');
  angular.module('reddit')
    .component('reddit', {
      templateUrl: './app/app.template.html',
      controller: controller
    })

  controller.$inject = ['$http']
  function controller($http) {
    const vm = this

    vm.$onInit = onInit

    function onInit() {
      vm.addingPost = false
    }
  }

}());
