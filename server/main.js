import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});
import '../imports/api/locations.js';
import '../imports/api/orders.js';
import '../imports/api/users.js';
