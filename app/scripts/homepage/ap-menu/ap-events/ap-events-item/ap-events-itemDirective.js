/**
 * Created by sdonose on 12/10/2015.
 */
"use strict";

angular.module('apMenu')
  .directive('apEventsItem',function(){
    return{
      require:'^apMenuEvents',
      scope:{
        name:'@',
        icon:'@',
        route:'@'
      },
      templateUrl:'scripts/homepage/ap-menu/ap-events/ap-events-item/ap-events-item.html',
      link: function (scope, el, attr, ctrl) {


        scope.isActive = function () {
          return el === ctrl.getActiveElement();
        };

        scope.isVertical = function () {
          return ctrl.isVertical() || el.parents('.ap-subitem-section').length > 0;
        }

        el.on('click', function (evt) {
          evt.stopPropagation();
          evt.preventDefault();
          scope.$apply(function () {
            ctrl.setActiveElement(el);
            ctrl.setRoute(scope.route);
          })
        })
      }
    }
  })
