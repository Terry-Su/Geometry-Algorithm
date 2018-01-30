const PATH = require( "path" )

const paths = require( "./paths" )
const { srcToBuild } = paths
const { BUILT_BUNDLE_JS } = require( "./constants" )

class SharedWebpackConfig {
  constructor() {
    /**
     * Modules
     */
    this.moduleEs = {
      test   : /\.js.*/,
      exclude: /node_modules/,
      use    : [
        {
          loader : "babel-loader",
          options: {
            presets: [ "es2015", "stage-2" ]
          }
        }
      ]
    }

    this.moduleReact = {
      rules: [
        {
          test   : /\.js.*/,
          exclude: /node_modules/,
          use    : [
            {
              loader : "babel-loader",
              options: {
                presets: [ "es2015", "stage-2", "react" ]
              }
            }
          ]
        },
        {
          test   : /\.tsx?$/,
          use    : "ts-loader",
          exclude: /node_modules/
        },
        {
          test: /\.css?/,
          use : [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            }
          ]
        },
        {
          test   : /\.scss?/,
          exclude: /node_modules/,
          use    : [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            }
          ]
        },
        {
          test: /\.styl$/,
          use : [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            },
            {
              loader: "stylus-loader"
            }
          ]
        },
        {
          test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
          use : [
            {
              loader: "file-loader"
            }
          ]
        }
      ]
    }

    /**
     * Dev tools
     */
    this.devtoolSourceMap = "source-map"

    /**
     * Entries
     */
    this.entryApp = dirname => {
      const entry = `${dirname}/app.js`
      return entry
    }

    /**
     * Outputs
     */
    this.outputBuild = dirname => {
      const path = srcToBuild( dirname )
      const res = {
        path    : path,
        filename: BUILT_BUNDLE_JS
      }

      return res
    }

    /**
     * Plugins
     */
    this.pluginCopyToBuild = ( pagePath, relativePaths ) => {
      const CopyWebpackPlugin = require( "copy-webpack-plugin" )
      const patterns = relativePaths.map( getPattern )
      const res = new CopyWebpackPlugin( patterns )
      return res

      function getPattern( relativePagePath ) {
        const from = PATH.resolve( pagePath, `./${relativePagePath}` )
        const to = srcToBuild( from )
        const res = {
          from,
          to
        }
        return res
      }
    }

    /**
     * React
     */
    this.react = {
      module : this.moduleReact,
      devtool: this.devtoolSourceMap
    }
  }
}

module.exports = new SharedWebpackConfig()
