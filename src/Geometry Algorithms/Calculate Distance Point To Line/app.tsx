import React from "react"
import { render } from "react-dom"
import PanelDisplayTabInstances from "shared/component/PanelDisplayTabInstances"
import { PointToPedalOnLine } from 'shared/component/DistancePointToLine';

class App extends PanelDisplayTabInstances {
  constructor( props: any ) {
    super( props )
  }

  componentDidMount() {
    this.setState( {
      activeInstanceName: "Point to pedal on line"
    } )
  }

  rawInstanceMap: any = {
    "Point to pedal on line": PointToPedalOnLine
  }
}

render( <App />, document.getElementById( "app" ) )
