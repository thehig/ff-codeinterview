/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const actionUtil = require('../../node_modules/sails/lib/hooks/blueprints/actionUtil.js');
const nets = require('nets');

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

      // Insert ICNDB joke here - http://www.icndb.com/api/

      const icndbEndpoint = `http://api.icndb.com/jokes/random?firstName=${matchingRecord.first_name}&lastName=${matchingRecord.last_name}`;

      nets({ url: icndbEndpoint }, function(icndbErr, icndbResp, icndbBody) {
        if (icndbErr) { return res.serverError(icndbErr); }

        var icndbResult = JSON.parse(icndbBody.toString('utf8'));
        console.log('icndbResult', icndbResult);

        matchingRecord.joke_id = icndbResult.value.id;
        matchingRecord.joke = icndbResult.value.joke;

        if (req._sails.hooks.pubsub && req.isSocket) {
          Model.subscribe(req, matchingRecord);
          actionUtil.subscribeDeep(req, matchingRecord);
        }

        res.ok(matchingRecord);
      });
    });
  }
};

