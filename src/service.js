var $ = require('jquery');

module.exports.search = function(q, callback) {
  $.getJSON('https://api.github.com/search/users?q=' + q, function(data) {
    console.log(data);
    callback(data.items);
  });
};
