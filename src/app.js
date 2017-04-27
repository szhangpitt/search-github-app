// Code goes here
console.clear();

var SERVICE = require('./service');
var UI = require('./ui');
var HTML = require('./html');
var h = HTML.h;

UI.display(h('p', {}, 'Enter keyword above'));

UI.onSubmit(function(q) {
  UI.display(h('p', {}, 'Searching...'));

  SERVICE.search(q, function(items) {
    UI.display(HTML.buildTable(items));
  });
});
