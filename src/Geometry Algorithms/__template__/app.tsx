import React from "react"
import { render } from "react-dom"
import {
  TriangleAreaWithBH,
  TriangleAreaWithABTheta,
  TriangleAreaWithABC,
  TriangleAreaWithB2Angle,
  TriangleAreaWithPoints
} from "shared/component/Area"
import PanelDisplayTabInstances from "shared/component/PanelDisplayTabInstances"

class App extends PanelDisplayTabInstances {
  constructor( props: any ) {
    super( props )
  }

  componentDidMount() {
    this.setState( {
      activeInstanceName: "Area-Triangle-Points"
    } )
  }

  rawInstanceMap: any = {
    "Area-Triangle-Points" : TriangleAreaWithPoints,
    "Area-Triangle-B2Angle": TriangleAreaWithB2Angle,
    "Area-Triangle-ABC"    : TriangleAreaWithABC,
    "Area-Triangle-ABTheta": TriangleAreaWithABTheta,
    "Area-Triangle-BH"     : TriangleAreaWithBH
  }
}

render( <App />, document.getElementById( "app" ) )
