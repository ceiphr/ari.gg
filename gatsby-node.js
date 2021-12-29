exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-force-graph/,
            use: loaders.null(),
          },
          {
            test: /react-curtains/,
            use: loaders.null(),
          },
          {
            test: /three/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
