'use strict';

angular.module('workspaceApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/workorderadmin', {
        templateUrl: 'app/workorderadmin/workorderadmin.html',
        controller: 'WorkorderadminCtrl'
      });
  });
