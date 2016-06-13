'use strict';

angular.module('heyWatchaPlayinApp', [
               'heyWatchaPlayinApp.auth',
               'heyWatchaPlayinApp.admin',
               'heyWatchaPlayinApp.constants',
               'ngCookies',
               'ngResource',
               'ngSanitize',
               'btford.socket-io',
               'ui.router',
               'ui.bootstrap',
               'validation.match',
               'ngAnimate'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
