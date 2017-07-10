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
          postService.makeComment(vm.post, commentObj)
          .then(function (response){
            vm.post.comments.push(response);
          })
          console.log(vm.newcomment);
          delete vm.newcomment;
        }

      }


}());
