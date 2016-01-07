'use strict';

/**
 * @ngdoc function
 * @name appMeanApp.controller:FamilyCtrl
 * @description
 * # FamilyCtrl
 * Controller of the appMeanApp
 */
angular.module('appMeanApp')
  .controller('FamilyCtrl', function ($scope) {
    $scope.family=[
      {
        memberFamily:'ion'
      },
      {
        memberFamily:'maria'
      }
    ]
  });
