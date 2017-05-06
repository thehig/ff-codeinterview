/**
 * User.js
 *
 * @description :: Contains the First, Last names and Birth Date of a user
 *              ??  Consider adding created_at, updated_at (Auto-added)
 *              !!  User id should **NOT** be an incrementing integer (potential data leakage)
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    id: {
      primaryKey: true,
      type: 'integer',
      autoIncrement: true
    },
    first_name: {
      required: true,
      type: 'string'
    },
    last_name: {
      required: true,
      type: 'string'
    },
    birth_date: {
      required: true,
      type: 'date'
    }
  }
};

