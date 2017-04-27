module.exports.h = h;

function h(tag, attrs, content) {
  const at = Object.keys(attrs).map(k => `${k}="${attrs[k]}"`).join('');

  const cont = Array.isArray(content) ? content.join('') : content || '';

  return `<${tag}${at}>${cont}</${tag}>`;
}

module.exports.buildTable = function buildTable(items) {
  return !items.length
    ? h('p', {}, 'No result found!')
    : h(
        'table',
        {},
        h(
          'tbody',
          {},
          items.map(t =>
            h('tr', {}, [
              h(
                'td',
                {},
                h('img', {
                  src: t.avatar_url,
                  style: 'width: 24px',
                  class: 'ava'
                })
              ),
              h('td', {}, t.login),
              h(
                'td',
                {},
                h('a', { href: t.html_url, target: '_blank' }, t.html_url)
              )
            ])
          )
        )
      );
};
