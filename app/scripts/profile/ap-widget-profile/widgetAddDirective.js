'use strict';

/**
 * @ngdoc directive
 * @name appMeanApp.directive:widgetDashboard
 * @description
 * # widgetDashboard
 */
angular.module('ap-widget-profile')
  .directive('widgetDashboard', function () {
    return {
      templateUrl: 'scripts/profile/ap-widget-profile/widgetAddTemplate.html',
      link: function (scope, element, attrs) {
       scope.addNewWidget=function(widget){
         var newWidget=angular.copy(widget.settings);
         scope.widgets.push(newWidget);
       }
      }
    };
  });
