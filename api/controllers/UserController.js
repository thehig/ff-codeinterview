/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var actionUtil = require('../../node_modules/sails/lib/hooks/blueprints/actionUtil.js');

module.exports = {
  // Implementation code taken from ./node_modules/sails/lib/hooks/blueprints/actions/findOne.js
  findOne: function(req, res) {
    var Model = actionUtil.parseModel(req);
    var pk = actionUtil.requirePk(req);

    var query = Model.findOne(pk);
    query = actionUtil.populateRequest(query, req);
    query.exec(function found(err, matchingRecord) {
      if (err) { return res.serverError(err); }
      if (!matchingRecord) { return res.notFound('No record found with the specified `id`.'); }

      // Insert ICNDB joke here

      if (req._sails.hooks.pubsub && req.isSocket) {
        Model.subscribe(req, matchingRecord);
        actionUtil.subscribeDeep(req, matchingRecord);
      }

      res.ok(matchingRecord);
    });
  }
};

