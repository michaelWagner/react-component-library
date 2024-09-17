import type { StorybookConfig } from "@storybook/react-vite";
import { withThemeFromJSXProvider } from '@storybook/addon-themes';


const config: StorybookConfig = {
  core: {
    builder: '@storybook/builder-vite',
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    'storybook-dark-mode',
    '@storybook/addon-themes',
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
