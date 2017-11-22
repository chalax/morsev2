angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('berandaCtrl',function($scope,$cordovaFlashlight,clxMorseTranslator ){
  console.log("beranda Ctrl Init");
  clxMorseTranslator.toMorse("kadal KADAL ");
    // $cordovaFlashlight.available().then(function(availability) {
    //   var avail = availability; // is available
    //   alert("Flash Available");
    // }, function () {
    //   alert("Flash Unavailable");
    // });

  $scope.FlashON =  function () {
    console.log("FLASH ON CLICKED");
     $cordovaFlashlight.switchOn();
     sleep(100);
     $cordovaFlashlight.switchOff();
     sleep(100);
     $cordovaFlashlight.switchOn();
     sleep(100);
     $cordovaFlashlight.switchOff();
     sleep(100);
     $cordovaFlashlight.switchOn();
     sleep(100);
     $cordovaFlashlight.switchOff();
     sleep(100);

     $cordovaFlashlight.switchOn();
     sleep(400);
     $cordovaFlashlight.switchOff();
     sleep(100);
     $cordovaFlashlight.switchOn();
     sleep(400);
     $cordovaFlashlight.switchOff();
     sleep(100);
     $cordovaFlashlight.switchOn();
     sleep(400);
     $cordovaFlashlight.switchOff();
     sleep(100);

     $cordovaFlashlight.switchOn();
     sleep(100);
     $cordovaFlashlight.switchOff();
     sleep(100);
     $cordovaFlashlight.switchOn();
     sleep(100);
     $cordovaFlashlight.switchOff();
     sleep(100);
     $cordovaFlashlight.switchOn();
     sleep(100);
     $cordovaFlashlight.switchOff();
     sleep(100);

    // .then(
    //   function (success) { /* success */ },
    //   function (error) {
    //   alert("Flash turn on failed");
    //
    //    });
  }
  $scope.FlashOff =  function () {
    console.log("FLASH Off CLICKED");
     $cordovaFlashlight.switchOff()
    .then(
      function (success) { /* success */ },
      function (error) {
      alert("Flash Turn off Failed");

       });
  }


})
.controller('tentangCtrl',function($scope){
  console.log("tentang Ctrl Init");
})
.controller('terjemahCtrl',function($scope,clxMorseTranslator,$cordovaFlashlight){
  console.log("terjemah Ctrl Init");
  $scope.translateToTextMorse = function(input){
    var output = clxMorseTranslator.toMorse(input.text);
    console.log(output);
    $scope.output = output;
  }
  $scope.translateToTextFlash =function(input){
    var output = clxMorseTranslator.toMorse(input.text);
    $scope.output = output;
    var charsplit = output.split("");
    for (var i = 0; i < charsplit.length; i++) {
        if(charsplit[i]=="."){
          playDot();
        }else if (charsplit[i]=='-') {
          playDash();
        }else if (charsplit[i]==' ') {
          playSpace();
        }else if (charsplit[i]=='/') {
          playSlash();
        }
    }
  }


  //function for playing morse code
  function playDot(){
    $cordovaFlashlight.switchOn();
    sleep(100);
    $cordovaFlashlight.switchOff();
  }
  function playDash(){
    $cordovaFlashlight.switchOn();
    sleep(400);
    $cordovaFlashlight.switchOff();
  }
  function playSpace(){
    sleep(500)
  }
  function playSlash(){
    sleep(1000)
  }

})
.controller('belajarCtrl',function($scope,clxMorseTranslator){
  console.log("belajar Ctrl Init");
  $scope.translateToTextMorse = function(input){
    var output = clxMorseTranslator.toMorse(input.text);
    console.log(output);
    $scope.output = output;
  }
  $scope.inputMorse={};
  $scope.inputMorse.text = "";
  $scope.inputDot = function(){
    // $scope.inputMorse.text = $scope.inputMorse.text+".";
    $scope.inputMorse.text +=".";
  }
  $scope.inputDash = function(){
    $scope.inputMorse.text +="-";
    // $scope.inputMorse.text = $scope.inputMorse.text+"-";
  }
  $scope.inputLetterSeparator = function(){
    $scope.inputMorse.text = $scope.inputMorse.text+" ";
  }
  $scope.inputWordSeparator = function(){
    $scope.inputMorse.text = $scope.inputMorse.text+" / ";
  }
  $scope.clear = function(){
    $scope.outputmorse = "";
    $scope.inputMorse.text = "";
  }

  $scope.translateToMorseToText = function(morse){
    var outputmorse = clxMorseTranslator.toUtf8(morse.text);
    $scope.outputmorse = outputmorse;

  }

})
.controller('alatCtrl',function($scope){
  console.log("alat Ctrl Init");
})
.controller('senterCtrl',function($scope,$cordovaFlashlight){
  console.log("senter Ctrl Init");
  $scope.FlashON =  function () {
    console.log("FLASH ON CLICKED");
     $cordovaFlashlight.switchOn();
   }
   $scope.FlashOff = function(){
     console.log("FLASH OFF CLICKED");

     $cordovaFlashlight.switchOff();
   }
})
.controller('kompasCtrl',function($scope,$cordovaDeviceOrientation){
  console.log("kompas Ctrl Init");

    $scope.rotate = function (angle) {
      $scope.angle = angle;
    }

    document.addEventListener("deviceready", function () {
        $scope.startCompass = function() {
            var options = {
                frequency: 500
            };

            $scope.watchPromise = $cordovaDeviceOrientation.watchHeading(options);

            $scope.watchPromise.then(
                    null, 
                    function(error) {
                        console.log(error);
                    }, 
                    function(result) {
                      var x = parseInt(result.magneticHeading)
                        $scope.dir ="-"+x ;
                    }
                );

        };

        $scope.stopCompass = function() {
            $cordovaDeviceOrientation.clearWatch($scope.watchPromise.watchID);
        };
    });
});




//External function for slee()
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
