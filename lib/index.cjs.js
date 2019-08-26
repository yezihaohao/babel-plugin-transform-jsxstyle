'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var less = _interopDefault(require('less'));
var deasync = _interopDefault(require('deasync'));

function index (babel) {
  // const { types: t } = babel;
  return {
    visitor: {
      JSXElement: function JSXElement(path) {
        var isStyleLess;
        path.traverse({
          JSXIdentifier: function JSXIdentifier(path) {
            if (path.node.name === 'style-less') {
              path.node.name = 'style';
              isStyleLess = true;
            } else {
              isStyleLess = false;
            }

            path.stop();
          },
          TemplateElement: function TemplateElement(path) {
            if (isStyleLess) {
              // console.log(path.node.value);
              var done = false;
              var outputCss = '';
              less.render(path.node.value.raw).then(function (output) {
                outputCss = output.css;
                done = true;
              }, function (error) {
                outputCss = 'error';
                done = true;
              });
              deasync.loopWhile(function () {
                return !done;
              });

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
