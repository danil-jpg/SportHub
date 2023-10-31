/** @type { import('@storybook/react-webpack5').StorybookConfig } */
// const config = ;

// export default config;

module.exports = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        '@storybook/addon-styling',
        '@storybook/preset-scss',
        'storybook-css-modules',
        'storybook-dark-mode',
        '@storybook/addon-storysource',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
};
