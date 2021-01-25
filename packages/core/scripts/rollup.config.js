import { rollupConfig } from './rollupConfig';

const options = [
  /* {
    format: 'cjs',
    env: 'development',
  },
  {
    format: 'cjs',
    env: 'production',
  }, */
  {
    format: 'esm',
  },
  {
    format: 'umd',
    env: 'development',
    legacy: true,
  },
  {
    format: 'umd',
    env: 'production',
    legacy: true,
  },
];

export default options.map((option) => rollupConfig(option));
