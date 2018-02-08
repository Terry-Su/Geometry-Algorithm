import React from "react"
import { render } from "react-dom"
import PanelDisplayTabInstances from "shared/component/PanelDisplayTabInstances"
import IsPointInPolygon from 'shared/component/IsPointInPolygon';


class App extends PanelDisplayTabInstances {
  constructor( props: any ) {
    super( props )
  }

  componentDidMount() {
    this.setState( {
      activeInstanceName: "IsPointInPolygon"
    } )
  }

  rawInstanceMap: any = {
    IsPointInPolygon
  }
}

render( <App />, document.getElementById( "app" ) )
