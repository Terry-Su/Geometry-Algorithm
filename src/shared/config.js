const WS = require( "./webpack" )
const { srcToBuild } = require( "./paths" )

function getNodeConfigGeometryAlgorithmPages( dirname ) {
  return {
    useWebpack   : true,
    webpackConfig: Object.assign(
      {
        entry  : WS.entryApp( dirname ),
        output : WS.outputBuild( dirname ),
        plugins: [ WS.pluginCopyToBuild( dirname, [ "index.html" ] ) ]
      },
      WS.react
    )
  }
}

module.exports = {
  getNodeConfigGeometryAlgorithmPages
}