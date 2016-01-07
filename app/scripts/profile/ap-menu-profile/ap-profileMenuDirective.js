/**
 * Created by sdonose on 12/3/2015.
 */
"use strict";

angular.module('apProfile')
  .directive('apMenuProfile',function($timeout){
    return{
      scope:{},
      transclude:true,
      templateUrl:'scripts/profile/ap-menu-profile/ap-profileMenuTemplate.html',
      controller:'apProfileCtrl',
      link:function(scope,el,attr){
        var item=el.find('.ap-selectable-item:first');
        $timeout(function(){
          item.trigger('click');
        })
      }
    }
  })
