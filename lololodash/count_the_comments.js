var _ = require("lodash");
var worker = function(comments){
  return _.chain(comments)
          .groupBy(function(comment){
            return comment.username
          })
          .map(function(count, username){
            return {
              username: username,
              comment_count: _.size(count)
            }
          })
          .reverse()
}

module.exports = worker;
