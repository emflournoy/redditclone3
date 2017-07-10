(function() {
  'use strict';

  angular
    .module('reddit')
    .service('postService', service);

service.$inject = ['$http'];

  function service($http) {
    this.getPosts = function(){
      return $http.get('/api/posts').then(function (response) {
        return response.data;
      })
    }

    this.getOnePost = function(id){
      return $http.get(`/api/posts/${id}`).then(function (response) {
        return response.data;
      })
    }

    this.makePost = function(post){
      return $http.post(`/api/posts`, post).then(function (response) {
        return response.data;
      })
    }

    this.patchPost = function(id, post){
      return $http.patch(`/api/posts/${id}`, post).then(function (response) {
        return response.data;
      })
    }

  }


}())
