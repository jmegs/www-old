const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
})

module.exports = function (content) {
  return md.render(content)
}
