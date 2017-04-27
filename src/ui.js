var $ = require('jquery');

module.exports.display = function(html) {
  $('#target').html(html);
};

module.exports.onSubmit = function(cb) {
  $('#search-form').on('submit', function(e) {
    e.preventDefault();
    cb($('#search-input').val());
  });
};
