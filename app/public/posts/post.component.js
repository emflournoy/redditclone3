(function() {
  'use strict'
  angular.module('reddit')
    .component('singlePost', {
      controller: redditController,
      templateUrl: "./posts/post.template.html",
      bindings: {post: '='}
    });

    redditController.$inject = ['$http', '$state', 'postService'];

      function redditController($http, $state, postService){
        const vm = this;



        vm.showComForm = function(post) {
          if (vm.post.showComment){
            vm.post.showComment = false;
          } else {
          vm.post.showComment = true;
          }
        }


        vm.votesUp = function(post) {
          vm.post.vote_count++
        }

        vm.votesDown = function(post) {
          vm.post.vote_count--
        }

      }


}());
