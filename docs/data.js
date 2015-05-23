
var postcss = require('postcss');
var atImport = require('postcss-import');
var csswring = require('csswring');

var pkg = require('../package.json');

var css = postcss()
  .use(atImport())
  .use(csswring())
  .process([
    '@import "normalize.css";',
    '@import "docs/styles.css";'
  ].join(''))
  .css;

module.exports = {
  title: pkg.name,
  description: pkg.description,
  version: pkg.version,
  css: css,
};

