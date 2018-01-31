const ws = require( "../../shared/webpack" )
const { srcToBuild } = require( "../../shared/paths" )

const config = {
  useWebpack   : true,
  webpackConfig: Object.assign(
    {
      entry : ws.entryApp( __dirname ),
      output: ws.outputBuild( __dirname ),
      plugins: [
        ws.pluginCopyToBuild( __dirname, [
          'index.html'
        ])
      ]
    },
    ws.react,
  )
}

// console.log( config )

module.exports = config
