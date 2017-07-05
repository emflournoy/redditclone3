(function() {
  'use strict'

  angular.module('reddit')
    .component('newPost', {
      controller: redditController,
      templateUrl: "./post/post.template.html"
    })

    redditController.$inject = ['$http', '$scope'];

      function redditController($http){
        const vm = this;

        vm.$onInit = function () {
          vm.showForm = false;
          vm.comForm = false;
          vm.posts = [];
          vm.sortTopic = 'votes';
          vm.sortTopicShow = 'Votes'
          $http.get('/api/posts').then(function (response) {
            vm.posts = response.data;
            console.log(response);
          })
        }

        vm.showPostForm = function() {
          if (vm.showForm){
            vm.showForm = false;
          } else {
          vm.showForm = true;
          }
        }

        vm.showComForm = function(post) {
          if (post.showComment){
            post.showComment = false;
          } else {
          post.showComment = true;
          }
        }

        vm.submitPost = function() {
          vm.post.vote_count = 0;
          vm.post.comments = [];
          vm.post.created_at = new Date();
          vm.showComment = false;
          vm.post.comments.show = false;
          vm.showForm = false;
          $http.post('api/posts', vm.post).then(function (response){
            response.data.comments = [];
            vm.posts.push(response.data)
          })
          delete vm.post;
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

        vm.sortBy = function(topic) {
          vm.sortTopic = topic.toLowerCase();
          vm.sortTopicShow = topic;
        }


      }


}());
