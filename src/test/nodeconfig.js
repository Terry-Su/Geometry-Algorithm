const PATH = require( 'path' )
const WS = require( "../shared/webpack" )
const { srcToBuild } = require( "../shared/paths" )


module.exports = {
  useWebpack   : true,
  webpackConfig: Object.assign(
    {
      entry  : {
        'core/index.spec.js': PATH.resolve( __dirname, 'core/index.spec.ts' )
      },
      output : {
        path: srcToBuild( __dirname ),
        filename: '[name]'
      },
      target: 'node'
    },
    WS.typescript,
  )
}