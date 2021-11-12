module.exports = {
    stories: ['../src/components/**/stories.tsx'],
    addons: ['@storybook/addon-essentials', 'storybook-addon-material-ui'],
    webpackFinal: (config) => {
        config.resolve.modules.push(`${process.cwd()}/src`);
        return config;
    }
};
