import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

function fromSource(format) {
    return {
        input: 'src/index.js',
        external: ['less', 'deasync', 'sass'],
        output: {
            file: `lib/index.${format}.js`,
            format: format,
        },
        plugins: [
            nodeResolve(),
            babel()
        ],
    };
}

export default [...['cjs'].map(format => fromSource(format))];
