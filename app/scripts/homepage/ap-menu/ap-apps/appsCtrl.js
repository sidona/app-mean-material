/**
 * Created by sdonose on 12/10/2015.
 */
"use strict";

angular.module('apMenu')
  .controller('appsCtrl', function ($scope,$http) {
    $http.get('scripts/services/apps.json').success(function(data){
      $scope.apps=data;
    })
  })
