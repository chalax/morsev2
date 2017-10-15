// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ngCordova'])

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

   .state('app.beranda', {
    url: '/beranda',
    views: {
      'menuContent': {
        templateUrl: 'templates/beranda.html',
        controller: 'berandaCtrl'
      }
    }
  })

  .state('app.tentang', {
    url: '/tentang',
    views: {
      'menuContent': {
        templateUrl: 'templates/tentang.html'
      }
    }
  })
  .state('app.tabel', {
    url: '/tabel',
    views: {
      'menuContent': {
        templateUrl: 'templates/tabel.html'
      }
    }
  })

  .state('app.terjemah', {
      url: '/terjemah',
      views: {
        'menuContent': {
          templateUrl: 'templates/terjemah.html',
          controller: 'terjemahCtrl'
        }
      }
    })
    .state('app.belajar', {
        url: '/belajar',
        views: {
          'menuContent': {
            templateUrl: 'templates/belajar.html',
            controller: 'belajarCtrl'
          }
        }
      })
    .state('app.alat', {
        url: '/alat',
        views: {
          'menuContent': {
            templateUrl: 'templates/alat.html',
            controller: 'alatCtrl'
          }
        }
      })
    .state('app.alat.kompas', {
      url: '/kompas',
      views: {
        'menuContent': {
          templateUrl: 'templates/kompas.html',
          controller: 'kompasCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/beranda');
})
.factory('clxMorseTranslator', function() {
  return {
      toMorse: function(words) {
        words = words.toLowerCase();
        var morsecode = "";
        //split words to letters
        var lettersArray = words.split("");
        for (var i = 0; i < words.length; i++) {
          var letterMorse = getmorsecode(words[i]);
          morsecode = morsecode+letterMorse+" ";
        }
        return morsecode;
      },
      toUtf8: function() {
        console.log("Translated to UTF-8");
      }
    };
});
var morseCodeArray = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..",".----","..---","...--","....-",".....","-....","--...","---..","----.","-----"];
var utf8Array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","w","z","1","2","3","4","5","6","7","8","9","0"];
function getmorsecode(letter){
  var x = utf8Array.indexOf(letter);
  if(x!==-1){
    return morseCodeArray[x];
  }else if(letter===" "){
    return "/";
  }else{
    return "?";
  }
}
function getUtf8(morsecode){

}
