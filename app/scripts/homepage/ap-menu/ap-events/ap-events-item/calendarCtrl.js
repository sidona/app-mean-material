/**
 * Created by sdonose on 12/10/2015.
 */
"use strict";
angular.module("apMenu")
  .controller('calendarCtrl', function ($scope, $filter, $http, $q, $window, $log, $timeout) {
    $scope.dayFormat = "d";
    $scope.selectedDate = null;


    $scope.firstDayOfWeek = 0;
    $scope.setDirection = function (direction) {
      $scope.direction = direction;
      $scope.dayFormat = direction === "vertical" ? "EEEE, MMMM d" : "d";
    };

    $scope.dayClick = function (date) {
      $scope.msg = "You clicked " + $filter("date")(date, "MMM d, y h:mm:ss a Z");
      console.log($scope.msg);
      $window.alert($scope.msg);
    };

    $scope.prevMonth = function (data) {
      $scope.msg = "You clicked (prev) month " + data.month + ", " + data.year;
    };

    $scope.nextMonth = function (data) {
      $scope.msg = "You clicked (next) month " + data.month + ", " + data.year;
    };

    var dates =
    {
      "2016-01-01": [{"date": "2016-01-01", "img": "http://onehungrymind.com/images/image03.jpg", "name": "onehungrymind"
      }],
      "2016-02-01": [{"date": "2016-02-01", "img": "http://onehungrymind.com/images/image04.jpg", "name": "blallllll"
      }]
    };

    var numFmt = function (num) {
      num = num.toString();
      if (num.length < 2) {
        num = "0" + num;
      }
      return num;
    };

    var loadContentAsync = true;
    $log.info("setDayContent.async", loadContentAsync);

    $scope.setDayContent = function (date) {

      var key = [date.getFullYear(), numFmt(date.getMonth() + 1), numFmt(date.getDate())].join("-");
      var data = (dates[key] || [{name: ""}])[0].name;
      if (loadContentAsync) {
        var deferred = $q.defer();
        $timeout(function () {
          deferred.resolve(data);
        });
        return deferred.promise;
      }

      return data;


    };


  })
