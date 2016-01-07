/**
 * Created by sdonose on 12/3/2015.
 */
"use strict";

angular.module('apProfile')
  .directive('apMenuProfileItem',function(){
    return{
      require:'^apMenuProfile',
      scope:{
        name:'@',
        icon:'@',
        route:'@'
      },
      templateUrl:'scripts/profile/ap-menu-profile/ap-menu-item.html',
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
