'use strict';

/**
 * @ngdoc directive
 * @name appMeanApp.directive:widgetBody
 * @description
 * # widgetBody
 */
angular.module('ap-widget-profile')
  .directive('widgetBody', function ($compile,$mdDialog) {
    return {
      templateUrl: 'scripts/profile/ap-widget-profile/widgetBodyTemplate.html',

      link: function (scope, element, attrs) {
        //se apeleaza din wwwdashboarddirective si dashboarddirective
        var newElement = angular.element(scope.item.template);
        element.append(newElement);
        $compile(newElement)(scope);


        //inchidere widget
        scope.close = function () {
          //item din ng-repeat il luam
          scope.widgets.splice(scope.widgets.indexOf(scope.item), 1)
        };

        scope.settings = function () {
          var options = {
            templateUrl: scope.item.widgetSettings.templateUrl,
            controller: scope.item.widgetSettings.controller,
            scope: scope
          };
          $mdDialog.show(options);
        }

      }
    }
  });
