'use strict';

/**
 * @ngdoc function
 * @name appMeanApp.controller:SelecgameCtrl
 * @description
 * # SelecgameCtrl
 * Controller of the appMeanApp
 */
angular.module('ap-widget-profile')
  .controller('SelectGameCtrl', function ($scope,dataService,$mdDialog) {
    $scope.isLoaded = false;
    dataService.getGames().then(function (data) {
      $scope.games = data;
      $scope.isLoaded = true;

      for (var i = 0; i < data.length; i++) {
        if (data[i].id == $scope.item.widgetSettings.id)
          $scope.selectedGame = data[i];
      }
    });

    $scope.saveSettings = function () {
      $scope.item.widgetSettings.id = $scope.selectedGame.id;
      $scope.$parent.selectedGame = $scope.selectedGame;
      $mdDialog.cancel();
    }
  });
