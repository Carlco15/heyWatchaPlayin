'use strict';

angular.module('heyWatchaPlayinApp.auth', ['heyWatchaPlayinApp.constants',
    'heyWatchaPlayinApp.util', 'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
