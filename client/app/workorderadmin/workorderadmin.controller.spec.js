'use strict';

describe('Controller: WorkorderadminCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var WorkorderadminCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WorkorderadminCtrl = $controller('WorkorderadminCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
