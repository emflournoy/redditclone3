(function() {
  'use strict';

  angular
    .module('reddit')
    .service('postService', service);

service.$inject = ['$http'];

  function service($http) {
    this.getPosts = function(){
      return $http.get('/api/posts').then(function (response) {
        let posts = response.data;
      })
    }
  }

}())
