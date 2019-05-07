import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import json from 'rollup-plugin-json';
import nodeBuiltins from 'rollup-plugin-node-builtins';
import nodeGlobals from 'rollup-plugin-node-globals';
import { terser } from 'rollup-plugin-terser';

var pkg = require('./package.json');
var externalDeps = Object.keys(
  Object.assign({}, pkg.dependencies, pkg.peerDependencies)
);
var nodeDeps = ['path', 'util'];
var external = externalDeps.concat(nodeDeps);

var globals = {
  'react': 'React',
  'react-dom': 'ReactDOM',
  'prop-types': 'PropTypes',
  'styled-components': 'styled'
};

export default {
  input: 'src/index.js',

  output: [
    {
      file: 'dist/index.js',
      format: 'umd',
      globals: globals,
      sourcemap: true,
      name: pkg.name
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      globals: globals,
      sourcemap: true
    }
  ],

  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      ENVIRONMENT: JSON.stringify('production')
    }),
    nodeGlobals(),
    nodeBuiltins(),
    babel({
      exclude: 'node_modules/**'
    }),
    json({
      include: 'node_modules/**',
      preferConst: true,
      indent: '  '
    }),
    resolve({
      browser: true,
      extensions: ['.mjs', '.js', '.jsx', '.json']
    }),
    terser(),
    commonjs()
  ],

  external: [].concat(external)
};
