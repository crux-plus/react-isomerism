module.exports = {
  plugins: [
    require('postcss-modules')({
      generateScopedName: '[path][name]__[local]--[hash:base64:5]',
    }),
  ],
}
