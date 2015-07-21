'use strict';

angular.module('workspaceApp')
  .controller('WorkorderadminCtrl', function ($scope, $http, Auth, User) {
    
    // Use the User $resource to fetch all users
    $scope.users = User.query();
    
    $scope.update = function(user) {
      User.updateworole({ id: user._id }, {
          workorderrole: user.workorderrole
        });
    
     };
    
    
  });
