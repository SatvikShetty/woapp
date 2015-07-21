'use strict';

angular.module('workspaceApp')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      },
      updaterole: {
        method: 'PUT',
        params: {
          controller:'Role'
        }
      },
      updateworole: {
        method: 'PUT',
        params: {
          controller:'WORole'
        }
      }
	  });
  });
