(function() {
  'use strict';

  angular.module('reddit').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    // this line is optional
    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'reddit',
        abstract: true,
        component: 'reddit',
      })

      .state({
        name: 'newPost',
        url: '/',
        component: 'newPost',
      })

      .state({
        name: 'editPost',
        url: '/:id',
        component: 'editPost',
      })
  }

}());
