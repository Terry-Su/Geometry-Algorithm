import React from "react"
import { render } from "react-dom"
import PanelDisplayTabInstances from "shared/component/PanelDisplayTabInstances"
import intersect from './intersect';

class App extends PanelDisplayTabInstances {
  constructor( props: any ) {
    super( props )
  }

  componentDidMount() {
    this.setState( {
      activeInstanceName: ""
    } )

    const line1: any = [
      {
        x: 100,
        y: 100
      }, {
        x: 200,
        y: 100
      }
    ]

    const line2: any = [
      {
        x: 150,
        y: 0
      }, {
        x: 150,
        y: 200
      }
    ]

    console.log( intersect( line1, line2 ) )
  }

  rawInstanceMap: any = {}

  render() {
    return <div>App</div>
  }
}

render( <App />, document.getElementById( "app" ) )
