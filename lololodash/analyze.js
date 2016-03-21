var _ = require("lodash");
var worker = function(freelancers){
  return {
    average:      average(freelancers),
    underperform: underperform(freelancers),
    overperform:  overperform(freelancers)
  }

  function average(freelancers){
    var total =  _.reduce(freelancers,function(result,freelancer){
      return result += freelancer.income
    },0)
    return total / _.size(freelancers)
  }

  function underperform(freelancers){
    return _.chain(freelancers)
      .sortBy('income')
      .filter(function(freelance){
      return freelance.income <= average(freelancers)
    })
  }

  function overperform(freelancers){
    return _.chain(freelancers)
      .sortBy('income')
      .filter(function(freelance){
      return freelance.income > average(freelancers)
    })
  }
}

module.exports = worker;
