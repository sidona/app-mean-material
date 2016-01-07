'use strict';

/**
 * @ngdoc directive
 * @name appMeanApp.directive:myProfile
 * @description
 * # myProfile
 */
angular.module('appMeanApp')
  .directive('myProfile', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the myProfile directive');
      }
    };
  });
