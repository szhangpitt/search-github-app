const expect = require('chai').expect;

describe('html.js', function () {
    it(
        'h(tag, attrs, content) -> <tag attrs...>content</tag>',
        function () {
            const h = require('../src/html').h;
            const p = h('p', { class: 'search-status' }, 'some message in paragragh');
            expect(p).to.equal('<p class="search-status">some message in paragragh</p>');
        }
    );
});
