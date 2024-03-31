// eslint-disable-next-line import/no-extraneous-dependencies
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/bundle.esm.js',
      format: 'es',
      sourcemap: true,
    },
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/bundle.umd.js',
      format: 'umd',
      name: 'YourLibraryName', // Replace 'YourLibraryName' with your library name
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript(),
    babel({ babelHelpers: 'runtime', extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
    terser(),
  ],
  external: ['react', 'react-dom'],
};
