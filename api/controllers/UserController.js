/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	find: function(req, res) {
    return req._sails.models.user.find().then(function(user){
      console.log('find', user);
      return res.ok(user);
    }, function(err){
      return res.serverError(err);
    });
  },
  // create: function(req, res) { console.log('create'); return; },
  // update: function(req, res) { console.log('update'); return; },
  // destroy: function(req, res) { console.log('destroy'); return; },
};
