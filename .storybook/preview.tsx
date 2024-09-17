import React from 'react';
import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import '../src/tailwind.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      // Set the initial theme
      darkClass: "dark",
      stylePreview: false,
    },
    decorators: [
      withThemeFromJSXProvider({
        themes: {
          Light: { name: 'Light', class: 'light', color: '#ffffff', default: true },
          Dark: { name: 'Dark', class: 'dark', color: '#000000' },
        },
        Provider: ({ children, theme }) => {
          // Change Storybook's background color based on the theme
          document.body.style.backgroundColor = theme.color

          return <div className={theme.class}>{children}</div>
        },
      }),
    ],
  },
};

export default preview;
