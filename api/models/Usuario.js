/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore:'default',
  identity:'Usuario',
  tableName:'usuarios',

  attributes: {
   
          nombres: { type:'string', required: true},
          email:{ type:'string', required: true},
          rol:{ type:'number', required: true},
          password:{ type:'string', required: true},

  },

};

