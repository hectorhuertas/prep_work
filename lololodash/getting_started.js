var _ = require("lodash");
var worker = function(users){
  return _.filter(users, function(user){
    return user.active;
  })
}

module.exports = worker;
