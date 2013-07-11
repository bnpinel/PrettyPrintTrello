(function initTrelloPrettyPrintApp() {
  'use strict';
  var appName = 'TrelloPrettyPrint';

  angular
    .module(appName, [], function ($routeProvider) {
      $routeProvider.
        when('/', {redirectTo: '/'}).
        when('/card', {templateUrl: '/tpp-card.html'}).
        when('/board', {templateUrl: '/tpp-board.html'}).
        when('/board/preview', {templateUrl: '/tpp-board-preview.html'}).
        when('/card/preview', {templateUrl: '/tpp-card-preview.html'}).

        otherwise({redirectTo: '/'});
    })
    .value('options', {
      callbackUrl: './../callback.html'
    })
    .value('trelloOptions', {
      nonInteractive: {
        name: appName,
        interactive: false,
        scope: { read: true },
        expiration: 'never',
        persist: true
      },
      interactive: {
        name: appName,
        interactive: true,
        type: 'redirect',
        scope: { read: true },
        expiration: 'never',
        persist: true
      }
    });
})();
