(function() {
  'use strict'
  angular.module('reddit')
    .component('postComments', {
      controller: redditController,
      templateUrl: "./posts/comments.template.html",
      bindings: {post: '='}
    });

    redditController.$inject = ['$http', '$stateParams', '$state', 'postService'];

      function redditController($http, $state, $stateParams, postService){
        const vm = this;


        vm.submitCom = function(comment) {
          console.log(comment);
          let commentObj = {content: comment};
          // commentObj.content = comment;
          postService.makeComment(vm.post, commentObj)
          .then(function (response){
            // console.log(response);
            vm.post.comments.push(response);
          })
          console.log(vm.newcomment);
          delete vm.newcomment;
        }

        // vm.submitCom = function(comment) {
        //   let commentObj = {};
        //   console.log(vm.post.id);
        //   commentObj.content = comment;
        //   commentObj.created_at = new Date();
        //   // commentObj.post_id = post.id;
        //   $http.post(`api/posts/${vm.post.id}/comments`,
        //    comment).then(function (response){
        //      console.log(response);
        //     post.comments.push(comment);
        //   })
        //   // delete post.comment;
        // }


      }


}());
