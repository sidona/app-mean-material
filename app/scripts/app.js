'use strict';

/**
 * @ngdoc overview
 * @name appMeanApp
 * @description
 * # appMeanApp
 *
 * Main module of the application.
 */
angular
  .module('appMeanApp', [
    'ui.router',
    'gridster',
    'ui.bootstrap',
    'ngStorage',
    'ap-widget-profile',
    'apContainerProfile',
    'ngMaterial',
    'apPost',
    'apMenu',
    'apChat'
  ]);
angular
  .module('appMeanApp')

  .config(function($stateProvider,$urlRouterProvider){
      $urlRouterProvider.otherwise('/');


    $stateProvider

      .state('post',{
        url:'/post',
        templateUrl:'views/main.html'
      })
      .state('postDetail',{
        url:'/post/:id',
        templateUrl:'homepage/ap-post/postDetail.html'
      })
      .state('profile',{
        url:'/profile',
        templateUrl:'views/myProfile.html'
      })
      .state('profile.about',{
        url:'/about',
        templateUrl:'views/profile_about.html'
      })
      .state('profile.friends',{
        url:'/friends',
        templateUrl:'views/profile_friends.html'
      })


      .state('profile.about.game',{
        url:'/game',
        template:'<widget></widget>'
      })
      .state('profile.about.study',{
        url:'/study',
        templateUrl:'scripts/profile/ap-menu-profile/study.html'
      })
      .state('profile.about.family',{
        url:'/family',
        templateUrl:'scripts/profile/ap-menu-profile/family.html'
      })
      .state('profile.about.information',{
        url:'/information',
        templateUrl:'scripts/profile/ap-menu-profile/information.html'
      })
      .state('profile.about.email',{
        url:'/email',
        templateUrl:'scripts/profile/ap-menu-profile/family.html'
      })

    /* Apps*/

      .state('apps',{
        url:'/apps',
        templateUrl:'scripts/homepage/ap-menu/ap-apps/appsTemplate.html'
      })
      .state('appsDetail',{
        url:'/apps/:id',
        templateUrl:'scripts/homepage/ap-menu/ap-apps/appsDetailTemplate.html'
      })
      .state('events',{
        url:'/events',
        templateUrl:'scripts/homepage/ap-menu/ap-events/eventsTemplate.html'
      })

    /* events */

      .state('events.upcoming',{
        url:'/upcoming',
        templateUrl:'scripts/homepage/ap-menu/ap-events/ap-events-item/upcoming.html'
      })
      .state('events.calendar',{
        url:'/calendar',
        templateUrl:'scripts/homepage/ap-menu/ap-events/ap-events-item/calendar.html'
      })
      .state('events.subscribed',{
        url:'/subscribed',
        templateUrl:'scripts/homepage/ap-menu/ap-events/ap-events-item/subscribed.html'
      })
      .state('events.past',{
        url:'/past',
        templateUrl:'scripts/homepage/ap-menu/ap-events/ap-events-item/past.html'
      })
      .state('events.create',{
        url:'/create',
        templateUrl:'scripts/homepage/ap-menu/ap-events/ap-events-item/create.html'
      })


    /*CHAT*/

      .state('chat',{
        url:'/chat',
        templateUrl:'scripts/homepage/ap-chat/chatMessage.html',
        controller:'chatMessageCtrl'
      })









  });
