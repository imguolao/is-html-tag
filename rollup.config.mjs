import nodeResolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import dts from 'rollup-plugin-dts'
import { terser } from 'rollup-plugin-terser'

const input = 'index.ts';
const umdName = 'IsHtmlTag';
const commonPlugins = [
  nodeResolve({
    extensions: ['.js', '.ts'],
  }),
  babel({
    extensions: ['.js', '.ts'],
    presets: [
      [
        '@babel/preset-env',
        {
          targets: ['> 2%, not dead', 'not IE 11'],
        },
      ],
      '@babel/preset-typescript',
    ],
    babelHelpers: 'bundled',
  }),
]

export default [
  {
    input,
    output: {
      exports: 'named',
      dir: 'lib/cjs/',
      format: 'cjs',
    },
    plugins: commonPlugins,
  },
  {
    input,
    output: {
      exports: 'named',
      dir: 'lib/es/',
      format: 'es',
    },
    plugins: commonPlugins,
  },
  {
    input,
    output: {
      exports: 'named',
      file: 'lib/umd/index.js',
      format: 'umd',
      name: umdName,
    },
    plugins: commonPlugins,
  },
  {
    input,
    output: {
      exports: 'named',
      file: 'lib/umd/index.min.js',
      format: 'umd',
      name: umdName,
    },
    plugins: [
      ...commonPlugins,
      terser(),
    ],
  },
  {
    input,
    output: {
      file: 'lib/index.d.ts',
      format: 'es',
    },
    plugins: [
      dts({
        compilerOptions: {
          preserveSymlinks: false,
        },
      }),
    ],
  },
]
