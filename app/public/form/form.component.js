(function() {
  'use strict'
  angular.module('reddit')
    .component('postForm', {
      controller: redditController,
      templateUrl: "./form/form.template.html",
      bindings: { post: '<', submitnewpost: '&'}
    })

    redditController.$inject = ['$http', '$stateParams', '$state', 'postService'];

      function redditController($http, $stateParams, $state, postService){
        const vm = this;
        console.log('vm',vm);

        if($stateParams.id){
          vm.$onInit = function() {
            postService.getOnePost($stateParams.id)
            .then(post => vm.post = post);
          }
        }

        // vm.submitPost = function() {
        //   if($stateParams.id){
        //     postService.patchPost($stateParams.id, vm.post)
        //     .then(function (response){
        //       $state.go("newPost");
        //     })
        //   } else {
        //     postService.makePost(vm.post)
        //     .then(function (response){
        //       response.data.comments = [];
        //       vm.posts.push(response.data)
        //     })
        //     delete vm.post;
        //   vm.showForm = false;
        //   }
        // }
        // vm.submitPost = function(){
          if(!$stateParams.id){
            console.log('trying to post');
            console.log(vm.post);
            // console.log(vm.submitnewpost);
            vm.submitpost = function(){
              vm.submitnewpost({post: vm.post});
            }
          } else {
            vm.submitpost = function() {
              console.log('submit from patch');
              postService.patchPost($stateParams.id, vm.post)
              .then(function (response){
                $state.go("newPost");
              })
            }
          }
        // }

      }


}());
