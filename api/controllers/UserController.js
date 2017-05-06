/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const actionUtil = require('../../node_modules/sails/lib/hooks/blueprints/actionUtil.js');
const nets = require('nets');
const moment = require('moment');

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

      matchingRecord.age = moment(matchingRecord.birth_date).toNow(true);

      // Insert ICNDB joke here - http://www.icndb.com/api/

      const icndbEndpoint = `http://api.icndb.com/jokes/random?escape=javascript&firstName=${matchingRecord.first_name}&lastName=${matchingRecord.last_name}`;

      nets({ url: icndbEndpoint }, function(icndbErr, icndbResp, icndbBody) {
        if (icndbErr) { return res.serverError(icndbErr); }
        let icndbResult;
        try {
          icndbResult = JSON.parse(icndbBody.toString('utf8'));
        }
        catch (excp) {
          return res.serverError(excp);
        }

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

