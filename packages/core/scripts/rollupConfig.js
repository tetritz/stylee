import path from 'path';
// import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import sourcemaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import pkg from '../package.json';

const outDir = 'dist';
const inputEntry = 'src/index.ts';

const name = pkg.umdName?.toLowerCase() || 'index';
const umdName = pkg.umdName || 'Component';

export function rollupConfig(options) {
  const tsconfig = options.legacy ? 'tsconfig.legacy.json' : 'tsconfig.json';

  const outPath = path.join(process.cwd(), outDir);
  const useMinify = options.env === 'production';

  const outputName = [
    path.join(outPath, name),
    options.formatName || options.format === 'umd' ? '' : options.format,
    useMinify ? 'min' : '',
    'js',
  ]
    .filter(Boolean)
    .join('.');

  // const isESModule = options.format === 'esm';

  const config = {
    input: inputEntry,
    output: {
      // dir: isESModule ? 'dist' : undefined,
      // file: isESModule ? undefined : outputName,
      file: outputName,
      format: options.format,
      name: umdName,
      // preserveModules: isESModule,
      sourcemap: true,
    },
    plugins: [
      external(),
      /* babel({
        exclude: 'node_modules/**',
        presets: ['@babel/env'],
      }), */
      typescript({
        tsconfig,
        clean: true,
      }),
      resolve(),
      options.format === 'umd' &&
        commonjs({
          include: /\/node_modules\//,
        }),
      sourcemaps(),
      useMinify &&
        terser({
          output: { comments: false },
          compress: {
            drop_console: true,
          },
        }),
    ].filter(Boolean),
  };

  return config;
}
