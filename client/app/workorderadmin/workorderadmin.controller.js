'use strict';

angular.module('workspaceApp')
  .controller('WorkorderadminCtrl', function ($scope, $http, Auth, User) {
    
    // Use the User $resource to fetch all users
    $scope.users = User.query();
    
    // $scope.update = function(user) {
    //   User.update({ id: user._id }, {
    //       attribute: "workorderrole",
    //       value: user.workorderrole
    //     });
    
    // };
    
    
  });
