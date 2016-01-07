'use strict';

/**
 * @ngdoc service
 * @name appMeanApp.dataService
 * @description
 * # dataService
 * Factory in the appMeanApp.
 */
angular.module('appMeanApp')
  .factory('dataService', function ($timeout) {
   var games=[
     {
       id:1000,
       name:'angry birds',
       score:9,
       users:1000000,
       ranking:6,
       image:'images/angry.jpg'
     },
     {
       id:1001,
       name:'candy crush',
       score:9.8,
       users:10000000,
       ranking:9,
       image:'images/candy.jpg'
     },
     {
       id:1002,
       name:'cat',
       score:9.8,
       users:10000000,
       ranking:9,
       image:'images/cat.jpg'
     }
   ];

    var getGames=function() {
      return $timeout(function () {
        return games;
      }, 500)
    }

    var getGame=function(id){
      return $timeout(function(){
        for(var i=0;i<games.length;i++)
          if(games[i].id==id)
            return games[i];
        return undefined;
      },2000);

    }

    return{
      getGame:getGame,
      getGames:getGames

    }

  });
