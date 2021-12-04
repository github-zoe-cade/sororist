module.exports = {
  experimental: {
    urlImports: ['https://cdn.skypack.dev'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};
