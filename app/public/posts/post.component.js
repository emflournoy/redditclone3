(function() {
  'use strict'

  angular.module('reddit')
    .component('post', {
      controller: redditController,
      templateUrl: "./posts/post.template.html"
    })

    redditController.$inject = ['$http', '$scope', 'postService'];

      function redditController($http, $scope, postService){
        const vm = this;

        vm.$onInit = function () {
          vm.posts = [];
          postService.getPosts().then(posts => vm.posts = posts);
          console.log(vm.posts, 'here');
        }


        vm.showComForm = function(post) {
          if (post.showComment){
            post.showComment = false;
          } else {
          post.showComment = true;
          }
        }

        vm.submitCom = function(post) {
          let commentObj = {};
          commentObj.content = post.comment;
          commentObj.created_at = new Date();
          commentObj.post_id = post.id;
          $http.post(`api/posts/${post.id}/comments`, commentObj).then(function (response){
            post.comments.push(commentObj);
          })
          delete post.comment;
        }

        vm.votesUp = function(post) {
          post.vote_count++
        }

        vm.votesDown = function(post) {
          post.vote_count--
        }

      }


}());
