/**
 * Created by sdonose on 12/3/2015.
 */
"use strict";

angular.module('apContainerProfile')
  .controller('apContainerCtrl', function ($scope,$window,$timeout,$rootScope,$location) {
    $scope.isMenuVertical=true;

    $scope.$on('ap-menu-item-selected-event', function (evt, data) {
      $scope.routeString = data.route;
      //pentru a putea functiona route cu location
      $location.path(data.route);


    });





  })
