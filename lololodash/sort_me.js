var _ = require("lodash");
var worker = function(items){
  var bob =  _.sortBy(items, function(item){
    return item.quantity;
  })
  return bob.reverse();
}

module.exports = worker;
