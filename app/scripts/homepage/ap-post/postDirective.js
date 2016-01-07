'use strict';

/**
 * @ngdoc directive
 * @name appMeanApp.directive:post
 * @description
 * # post
 */
angular.module('apPost')
  .directive('post', function ($http) {
    return {
      templateUrl: 'scripts/homepage/ap-post/post.html',
      link: function (scope, element, attrs) {
        $http.get('scripts/homepage/ap-post/dataPost.json').success(function(data){
          scope.posts=data;
        })

      }
    };
  });
