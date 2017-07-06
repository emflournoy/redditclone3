(function() {
  'use strict'
  angular.module('reddit')
    .component('editPost', {
      controller: redditController,
      templateUrl: "./edit/edit.template.html"
    })

    redditController.$inject = ['$http', '$stateParams', '$state'];

      function redditController($http, $stateParams, $state){
        const vm = this;

        vm.$onInit = function () {
          $http.get(`/api/posts/${$stateParams.id}`).then(function (response) {
            vm.post = response.data;
          })
        }


        vm.updatePost = function() {
          vm.post.vote_count = 0;
          vm.post.created_at = new Date();
          console.log(vm.post);
          $http.patch(`/api/posts/${$stateParams.id}`, vm.post)
          .then(function (response){
            $state.go("newPost");
          })
        }

        vm.editPost = function(post){
          console.log(post);
        }

      }


}());
