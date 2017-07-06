(function() {
  'use strict'

  angular.module('reddit')
    .component('newPost', {
      bindings: {
        posts: '='
      },
      controller: redditController,
      templateUrl: "./posts/posts.template.html"
    })

    redditController.$inject = ['$http', '$scope', 'postService'];

      function redditController($http, $scope, postService){
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

        vm.submitPost = function() {
          vm.post.vote_count = 0;
          vm.post.comments = [];
          vm.post.created_at = new Date();
          vm.showComment = false;
          vm.post.comments.show = false;
          vm.showForm = fase;
          $http.post('api/posts', vm.post).then(function (response){
            response.data.comments = [];
            vm.posts.push(response.data)
          })
          delete vm.post;
        }

        vm.sortBy = function(topic) {
          vm.sortTopic = topic.toLowerCase();
          vm.sortTopicShow = topic;
        }


      }


}());
