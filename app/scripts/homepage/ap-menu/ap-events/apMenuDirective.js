/**
 * Created by sdonose on 12/10/2015.
 */
"use strict";

angular.module('apMenu')
  .directive('apMenuEvents',function($timeout){
    return{
      scope:{},
      transclude:true,
      templateUrl:'scripts/homepage/ap-menu/ap-events/ap-menuTemplate.html',
      controller:'apMenuEventsCtrl',
      link:function(scope,el,attr){
        var item=el.find('.ap-selectable-item:first');
        $timeout(function(){
          item.trigger('click');
        })
      }
    }
  })
