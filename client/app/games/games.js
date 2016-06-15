'use strict';

angular.module('heyWatchaPlayinApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('games', {
        url: '/games',
        template: '<games></games>'
      });
  });
