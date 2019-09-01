'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var less$1 = _interopDefault(require('less'));
var deasync = _interopDefault(require('deasync'));

/*
 * File: less.js
 * Desc: less handler
 * File Created: 2019-09-01 17:27:37
 * Author: chenghao
 * ------
 * Copyright 2019 - present, chenghao
 */
var less = (function (content) {
  var result = '';
  var done = false;
  less$1.render(content).then(function (output) {
    result = output.css;
    done = true;
  }, function (error) {
    result = 'error';
    done = true;
  });
  deasync.loopWhile(function () {
    return !done;
  });
  return result;
});

/*
 * File: sass.js
 * Desc: sass handler
 * File Created: 2019-09-01 17:27:32
 * Author: chenghao
 * ------
 * Copyright 2019 - present, chenghao
 */
var sass = require('sass');

var sass$1 = (function (content) {
  var result;

  try {
    result = sass.renderSync({
      data: content
    }).css.toString();
    ;
  } catch (error) {
    result = 'error';
  }

  return result;
});

function index (babel) {
  // const { types: t } = babel;
  return {
    visitor: {
      JSXElement: function JSXElement(path) {
        var isStyleLess, isStyleSass;
        path.traverse({
          JSXIdentifier: function JSXIdentifier(path) {
            if (path.node.name === 'style-less') {
              path.node.name = 'style';
              isStyleLess = true;
            } else if (path.node.name === 'style-sass') {
              path.node.name = 'style';
              isStyleSass = true;
            } else {
              isStyleLess = false;
            }

            path.stop();
          },
          TemplateElement: function TemplateElement(path) {
            if (isStyleLess || isStyleSass) {
              var outputCss = '';
              isStyleLess && (outputCss = less(path.node.value.raw));
              isStyleSass && (outputCss = sass$1(path.node.value.raw));

              if (outputCss === 'error') {
                throw path.buildCodeFrameError('Transform less error');
              } else {
                path.node.value = {
                  raw: outputCss,
                  cooked: outputCss
                };
                isStyleLess = false;
              }
            }
          }
        });
      }
    }
  };
}

module.exports = index;
