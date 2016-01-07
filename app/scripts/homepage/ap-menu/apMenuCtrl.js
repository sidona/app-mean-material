/**
 * Created by sdonose on 12/9/2015.
 */

"use strict";

angular.module('apMenu')
.controller('apMenuCtrl',function($scope,$http){

    $http.get('scripts/services/apps.json').success(function(data){
      $scope.apps=data;
    })
  })
