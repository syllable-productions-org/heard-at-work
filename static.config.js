// This is taken from
// https://github.com/nozzle/react-static/blob/master/examples/sass/plugins/react-static-plugin-sass.js
// but i cant figure out how it's supposed to work as a proper react-static plugin
const reactStaticPluginSass = (config, { stage }) => {
  const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
  let loaders = []
  let includePaths = []

  const sassLoaderPath = require.resolve('sass-loader')

  const sassLoader = {
    loader: sassLoaderPath,
    options: { includePaths: ['src/', ...includePaths] },
  }
  const styleLoader = { loader: 'style-loader' }
  const cssLoader = {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      minimize: stage === 'prod',
      sourceMap: false,
    },
  }

  if (stage === 'dev') {
    // Dev
    loaders = [styleLoader, cssLoader, sassLoader]
  } else if (stage === 'node') {
    // Node
    // Don't extract css to file during node build process
    loaders = [cssLoader, sassLoader]
  } else {
    // Prod
    loaders = [ExtractCssChunks.loader, cssLoader, sassLoader]
  }

  config.module.rules[0].oneOf.unshift({
    test: /\.s(a|c)ss$/,
    use: loaders,
  })

  return config
};

export default {
  webpack: (config, { stage }) => {
    return reactStaticPluginSass(config, { stage });
  },
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/Components/Home',
      },
      {
        path: '/about',
        component: 'src/Components/About',
      },
      {
        path: '/contact',
        component: 'src/Components/Contact',
      },
      {
        path: '404',
        component: 'src/Components/404',
      },
    ]
  },
}
