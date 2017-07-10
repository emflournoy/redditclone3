(function() {
  'use strict'

  angular.module('reddit')
    .component('newPost', {
      controller: redditController,
      templateUrl: "./posts/posts.template.html"
    })

    redditController.$inject = ['$http', '$stateParams', 'postService'];

      function redditController($http, $stateParams, postService){
        const vm = this;

        vm.$onInit = function () {
          vm.showForm = false;
          vm.comForm = false;
          vm.posts = [];
          vm.sortTopic = 'votes';
          vm.sortTopicShow = 'Votes'
          postService.getPosts().then(posts => vm.posts = posts);

        }

        vm.showPostForm = function() {
          if (vm.showForm){
            vm.showForm = false;
          } else {
          vm.showForm = true;
          }
        }

        vm.submitnewpost = function(post) {
          console.log('submit from post');
          postService.makePost(post)
          .then(function (response){
            vm.posts.push(response)
            response.comments = [];
          })
          // delete vm.post;
          vm.showForm = false;
        }

        // vm.submitpost = function() {
        //   console.log($stateParams);
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


        vm.sortBy = function(topic) {
          vm.sortTopic = topic.toLowerCase();
          vm.sortTopicShow = topic;
        }


      }


}());
