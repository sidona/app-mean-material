/**
 * Created by sdonose on 12/14/2015.
 */
"use strict"

angular.module('apChat')
.controller('chatCtrl',function($scope,$http,$timeout){
    $scope.showUser=false;

    $http.get('scripts/homepage/ap-chat/users.json').success(function(data){
      $scope.users=data;
    })


  })
