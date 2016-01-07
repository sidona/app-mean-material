/**
 * Created by sdonose on 12/3/2015.
 */
"use strict";

angular.module('apContainerProfile')
.directive('apContainer',function(){
    return{
      transclude:true,
      scope:{
        title:'@'
      },
      controller:'apContainerCtrl',
      templateUrl:'scripts/profile/ap-container-profile/ap-container.html'
    }
  })
