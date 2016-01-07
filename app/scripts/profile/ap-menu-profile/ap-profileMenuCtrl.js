/**
 * Created by sdonose on 12/3/2015.
 */
"use strict";

angular.module('apProfile')
  .controller('apProfileCtrl',function($scope,$rootScope){

    //$scope.showMenu=true;
    $scope.isVertical=true;


    this.getActiveElement=function(){
      return $scope.activeElement;
    }
    this.setActiveElement = function (el) {
      $scope.activeElement = el;
    };

    this.setRoute = function (route) {
      $rootScope.$broadcast('ap-menu-item-selected-event',
        {route: route});
    };



    //is vertical din directiv menu item directive
    this.isVertical=function(){
      return $scope.isVertical;
    }







})
