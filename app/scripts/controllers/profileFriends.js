'use strict';

/**
 * @ngdoc function
 * @name appMeanApp.controller:ProfilefriendsCtrl
 * @description
 * # ProfilefriendsCtrl
 * Controller of the appMeanApp
 */
angular.module('appMeanApp')
  .controller('profileFriendsCtrl', function ($scope,$http) {
   var photo=['images/user1/1.jpg',
     'images/user1/2.jpg',
     'images/user1/3.jpg',
     'images/user1/4.jpg',
     'images/user1/5.jpg',
     'images/user1/6.jpg',
     'images/user1/7.jpg'
   ]
$scope.photosFriends=photo;

    $http.get('scripts/homepage/ap-chat/users.json').success(function(data) {
      $scope.friends = data;
    });
  });
