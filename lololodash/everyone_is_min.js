var _ = require("lodash");
var worker = function(cities){
  hot = [];
  warm = [];
   _.forEach(cities, function(temperatures, city){
    {
      console.log('New city:')
      console.log(city)
      console.log(temperatures)
      if (_.every(temperatures, function(e){return e > 19})) {
        hot.push(city)
      } else if (_.some(temperatures, function(e){return e > 19})) {
        warm.push(city)
      }
    }

  })
  return {
    hot: hot,
    warm: warm
  }
}

module.exports = worker;
