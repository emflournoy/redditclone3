(function() {
  'use strict'
  angular.module('reddit')
    .component('postComments', {
      controller: redditController,
      templateUrl: "./posts/comments.template.html",
      bindings: {post: '='}
    });

    redditController.$inject = ['$http', '$state', 'postService'];

      function redditController($http, $state, postService){
        const vm = this;


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


      }


}());
