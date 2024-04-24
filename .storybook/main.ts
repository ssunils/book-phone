import type { StorybookConfig } from "@storybook/nextjs";
import postcss from "postcss";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: postcss,
          postcssOptions: {
            plugins: {
              tailwindcss: {}, // or you can nest your options entirely here
              autoprefixer: {
                // autoprefixer options
              },
            },
          },
        },
      },
    }
  ],
  framework: {
    "name": "@storybook/nextjs",
    "options": {}
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
};
export default config;

// module.exports = {
//   stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
//   addons: [
//     "@storybook/addon-onboarding",
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@chromatic-com/storybook",
//     "@storybook/addon-interactions",
//     {
//       name: '@storybook/addon-postcss',
//       options: {
//         cssLoaderOptions: {
//           // When you have splitted your css over multiple files
//           // and use @import('./other-styles.css')
//           importLoaders: 1,
//         },
//         postcssLoaderOptions: {
//           // When using postCSS 8
//           implementation: require('postcss'),
//         },
//       },
//     },
//   ],

//   framework: {
//     "name": "@storybook/nextjs",
//     "options": {}
//   },
//   webpackFinal: async config => {
//     config.module.rules.push({
//       test: /\.scss$/,
//       use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
//     });

//     return config;
//   }
// };