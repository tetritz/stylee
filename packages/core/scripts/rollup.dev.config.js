import { rollupConfig } from './rollupConfig';

const options = [
  {
    format: 'umd',
    env: 'development',
    legacy: false,
  },
];

export default options.map((option) => rollupConfig(option));
