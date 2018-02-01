import React from "react"
import { render } from "react-dom"
import PanelDisplayTabInstances from "shared/component/PanelDisplayTabInstances"

class App extends PanelDisplayTabInstances {
  constructor( props: any ) {
    super( props )
  }

  componentDidMount() {
    this.setState( {
      activeInstanceName: ""
    } )
  }

  rawInstanceMap: any = {
  }
}

render( <App />, document.getElementById( "app" ) )
