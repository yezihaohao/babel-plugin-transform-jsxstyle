const less = require('less');
const deasync = require('deasync');
module.exports = function(babel) {
    // const { types: t } = babel;
    return {
        visitor: {
            JSXElement(path) {
                let isStyleLess;
                path.traverse({
                    JSXClosingElement(path) {
                        path.traverse({
                            JSXIdentifier(path) {
                                if (path.node.name === 'style-less') {
                                    path.node.name = 'style';
                                    isTemplate = true;
                                } else {
                                    isTemplate = false;
                                }
                            },
                        });
                    },
                    TemplateElement(path) {
                        if (isStyleLess) {
                            // console.log(path.node.value);
                            let done = false;
                            let outputCss = '';
                            less.render(path.node.value.raw).then(
                                function(output) {
                                    outputCss = output.css;
                                    done = true;
                                },
                                function(error) {
                                    outputCss = 'error';
                                    done = true;
                                }
                            );
                            deasync.loopWhile(() => !done);
                            if (outputCss === 'error') {
                                throw path.buildCodeFrameError('Transform less error');
                            } else {
                                path.node.value = {
                                    raw: outputCss,
                                    cooked: outputCss,
                                };
                            }
                        }
                    },
                });
            },
        },
    };
};
