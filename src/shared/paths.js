const PATH = require( "path" )

class Paths {
  constructor() {
    this.buildPath = PATH.resolve( __dirname, "../../build" )

    this.srcPath = PATH.resolve( __dirname, "../../src" )

    /**
     * Transform page path in src to simular path in build
     */
    this.srcToBuild = pagePath => {
      const relativePath = PATH.relative( this.srcPath, pagePath )
      const res = PATH.resolve( this.buildPath, relativePath )
      return res
    }
  }
}

module.exports = new Paths()
