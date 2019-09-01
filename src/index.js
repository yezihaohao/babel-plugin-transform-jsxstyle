import less from './less';
import sass from './sass';

export default function(babel) {
    // const { types: t } = babel;
    return {
        visitor: {
            JSXElement(path) {
                let isStyleLess, isStyleSass;
                path.traverse({
                    JSXIdentifier(path) {
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
                    TemplateElement(path) {
                        if (isStyleLess || isStyleSass) {
                            let outputCss = '';
                            isStyleLess && (outputCss = less(path.node.value.raw));
                            isStyleSass && (outputCss = sass(path.node.value.raw));
                            if (outputCss === 'error') {
                                throw path.buildCodeFrameError('Transform less error');
                            } else {
                                path.node.value = {
                                    raw: outputCss,
                                    cooked: outputCss,
                                };
                                isStyleLess = false;
                            }
                        }
                    },
                });
            },
        },
    };
}
