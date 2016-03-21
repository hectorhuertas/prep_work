var _ = require("lodash");
var worker = function(orders){
  return _.chain(orders)
  .groupBy('article')
  .map(function(value, key){
    return {
      article: Number(key),
      total_orders: totalOrders(value)
    }
  })
  .reverse()
  
  function totalOrders(orders){
    return _.reduce(orders,function(result,order){
      return result += order.quantity
    },0)
  }
}

module.exports = worker;
