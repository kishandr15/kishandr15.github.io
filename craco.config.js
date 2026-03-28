module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Add .mdx extension to module resolution
      if (!webpackConfig.resolve.extensions.includes('.mdx')) {
        webpackConfig.resolve.extensions.push('.mdx');
      }

      // Find the oneOf rule array (CRA's webpack config structure)
      const oneOfRule = webpackConfig.module.rules.find((rule) => rule.oneOf);

      if (oneOfRule) {
        // Remove .mdx from the file-loader (last rule in oneOf catches everything)
        const fileLoaderRule = oneOfRule.oneOf[oneOfRule.oneOf.length - 1];
        if (fileLoaderRule && fileLoaderRule.exclude) {
          fileLoaderRule.exclude.push(/\.mdx$/);
        }

        // Add MDX loader at the beginning of oneOf
        oneOfRule.oneOf.unshift({
          test: /\.mdx$/,
          use: [
            {
              loader: require.resolve('babel-loader'),
              options: {
                presets: [require.resolve('babel-preset-react-app')],
              },
            },
            {
              loader: require.resolve('@mdx-js/loader'),
              options: {
                providerImportSource: '@mdx-js/react',
                remarkPlugins: [require('remark-gfm').default],
              },
            },
          ],
        });
      }

      return webpackConfig;
    },
  },
};
