import type { StorybookConfig } from '@storybook/react-webpack5';

import path, { join, dirname } from 'path';
import { SourceFile, TransformerFactory } from 'typescript';

const createBabelTsRule = (transformers?: TransformerFactory<SourceFile>[]) => ({
  test: /\.(ts|js)x?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
      },
    },
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
        getCustomTransformers: transformers?.length
          ? () => ({
              before: transformers,
            })
          : undefined,
      },
    },
  ],
});


function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
  stories: ['../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-webpack5-compiler-swc'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  webpackFinal: async (config) => {
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    config.module.rules.push(createBabelTsRule())
    config.resolve = config.resolve || {}
    config.resolve.alias = config.resolve.alias || {}

    const imageRule = config.module.rules.find((rule) => rule?.['test']?.test('.svg'));
    if (imageRule) {
      imageRule['exclude'] = /\.svg$/;
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.resolve.alias['@'] = path.resolve(__dirname, '../src');

    return config;
  },
  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: {},
  },

  docs: {
    autodocs: 'tag',
  },
};

export default config;

