'use strict';

/**
 * @ngdoc directive
 * @name appMeanApp.directive:widget
 * @description
 * # widget
 */
angular.module('ap-widget-profile')
  .directive('widget', function ($localStorage) {
    return {
      template: '<widget-dashboard></widget-dashboard>',
      scope:{

      },
      link: function (scope, element, attrs) {
        scope.gridsterOpts={
          columns:12,
          margins:[20,20],
          outerMargin:false,
          pushing:true,
          floating:true,
          swapping:false
        };

        scope.widgetDefinitions=[
          {
            title:'games',
            settings:{
              sizeX: 3,
              sizeY: 3,
              minSizeX: 2,
              minSizeY: 2,
              template:'<games></games>',
              widgetSettings:{
                id:1000,
                templateUrl:'selectGameTemplate.html',
                controller:'SelectGameCtrl'
              }

            }
          }
        ];

        scope.widgets=[

        ];

        ////save localstorage
        //scope.widgets= $localStorage.widgets||[
        //
        //
        //  ];
        //scope.$watch('widgets',function(){
        //  $localStorage.widgets=scope.widgets;
        //},true);

      }
    };
  });
