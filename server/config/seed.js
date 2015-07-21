/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');


User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    workorderrole:'woadmin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, {
    provider: 'local',
    name: 'Satvik',
    email: 'skshetty@indiana.edu',
    password: '1234'
  }, {
    provider: 'local',
    name: 'Mike',
    email: 'mike@39dn.com',
    password: '1234'
  },function() {
      console.log('finished populating users');
    }
  );
});