var _ = require("lodash");
var worker = function(data){
  return _.template('Hello <%= name %> (logins: <%= login.length %>)')( data)
}

module.exports = worker;
