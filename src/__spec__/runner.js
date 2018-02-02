const Jasmine = require( 'jasmine' )
const jasmineInstance = new Jasmine()

jasmineInstance.loadConfigFile( 'spec/support/jasmine.js' )
jasmineInstance.configureDefaultReporter( {
    showColors: true
} )
jasmineInstance.execute()
