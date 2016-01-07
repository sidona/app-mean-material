'use strict';

/**
 * @ngdoc function
 * @name appMeanApp.controller:StudyCtrl
 * @description
 * # StudyCtrl
 * Controller of the appMeanApp
 */
angular.module('appMeanApp')
  .controller('StudyCtrl', function ($scope) {
    $scope.showAddWork=false;
    $scope.showAddProfessional=false;
    $scope.showAddCollege=false;
    $scope.showAddHighSchool=false;
  });
