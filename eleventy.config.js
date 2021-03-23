const env = require('./data/env')

const { humanDate, ISODate } = require('./helpers/filters/date')
const leftpad = require('./helpers/filters/leftpad')
const markdownify = require('./helpers/filters/markdownify')
const stringify = require('./helpers/filters/stringify')

module.exports = function (config) {
  config.setDataDeepMerge(true)
  config.setQuietMode(env.isDevelopment)

  config.addPassthroughCopy({'static': "/"})
  
  // set custom liquid instance
  let liquid = require('liquidjs')
  let options = {
    extname: '.html',
    dynamicPartials: true,
    strict_filters: true,
    root: ['./src/_partials', './src/_layouts']
  }

  config.setLibrary('liquid', liquid(options))

  // add custom tags
  config.addPairedShortcode('markdown', markdownify)

  config.addFilter('markdownify', markdownify)
  config.addFilter('stringify', stringify)
  config.addFilter('humanDate', humanDate)
  config.addFilter('ISODate', ISODate)
  config.addFilter('leftpad', leftpad)

  // sort projects collection by "weight" frontmatter field
  config.addCollection('sortedProjects', function (collections) {
    let projects = collections.getFilteredByTag('projects')
    return projects.sort((a, b) => a.data.weight - b.data.weight)
  })

  return {
    dir: {
      input: 'src',
      layouts: '_layouts',
      includes: '_partials',
      data: '../data'
    }
  }
}
