'use strict';

/**
 * @ngdoc directive
 * @name appMeanApp.directive:games
 * @description
 * # games
 */
angular.module('ap-widget-profile')
  .directive('games', function (dataService) {
    return {
      templateUrl: 'scripts/profile/ap-widget-profile/widgetGamesTemplate.html',

      link: function (scope, element, attrs) {
        scope.isLoaded=false;
        scope.hasError=false;
        scope.selectedGame=null;
        //include error
        scope.loadGame=function(){
          scope.hasError=false;
          dataService.getGame(scope.item.widgetSettings.id)
            .then(function(data){
              //success
              scope.selectedGame=data;
              scope.isLoaded=true;
              scope.isError=false;
            },function(data){
              //error
              scope.hasError=true;
            });
        };
        scope.loadGame();
      }

    };
  });
