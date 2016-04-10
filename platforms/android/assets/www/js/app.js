// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('poeticApp', ['ionic','ngResource'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.tab', {
  url: '/tab',
  views: {
    'menuContent': {
      templateUrl: 'templates/tabs.html'
    }
  }
})

.state('app.tab.dash', {
  url: '/dash',
  views: {
    'tab-dash': {
      templateUrl: 'templates/tab-dash.html',
      controller: 'DashCtrl'
    }
  }
})


  .state('app.tab.authors', {
      url: '/authors',
      views: {
        'tab-authors': {
          templateUrl: 'templates/tab-authors.html',
          controller: 'AuthorsCtrl'
        }
      }
    })

    .state('app.tab.poems-list', {
      url: '/authors/:authorName',
      views: {
        'tab-authors': {
          templateUrl: 'templates/tab-poems.html',
          controller: 'PoemsListCtrl'
        }
      }
    })

    .state('app.tab.poem-lines', {
      url: '/authors/poem/:title',
      views: {
        'tab-authors': {
          templateUrl: 'templates/tab-poem-detail.html',
          controller: 'PoemsLinesCtrl'
        }
      }
    })

    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/tab');
});
