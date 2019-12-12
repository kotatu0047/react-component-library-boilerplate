const path = require('path')
const babel = require('rollup-plugin-babel')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const external = require('rollup-plugin-peer-deps-external')
const postcss = require('rollup-plugin-postcss')
const typescript = require('@rollup/plugin-typescript')
const license = require('rollup-plugin-license')
const babelConfig = require('./babel.config')
const pkg = require('./package.json')

const input = 'src/index.ts'
const extensions = ['js', 'jsx', '.ts', 'tsx']

module.exports = [
  {
    input,
    output: {
      file: pkg.module,
      format: 'esm',
      exports: 'named',
      sourcemap: true,
    },
    plugins: [
      babel({
        babelrc: false,
        extensions,
        runtimeHelpers: true,
        presets: babelConfig.presets,
        plugins: babelConfig.plugins,
        exclude: 'node_modules/**',
      }),
      external(),
      resolve({ extensions }),
      commonjs({
        include: 'node_modules/**',
        extensions: ['.js', '.coffee'],
        ignoreGlobal: false,
        sourceMap: false,
        namedExports: undefined,
        ignore: ['conditional-runtime-dependency'],
      }),
      postcss({
        plugins: [],
        modules: true,
      }),
      typescript(),
      license({
        sourcemap: false,
        banner: {
          commentStyle: 'regular',
          content: {
            file: path.join(__dirname, 'LICENSE'),
            encoding: 'utf-8',
          },
        },
        thirdParty: {
          includePrivate: true,
          output: {
            file: path.join(__dirname, 'dist', 'dependencies.txt'),
            encoding: 'utf-8',
          },
        },
      }),
    ],
  },
]
