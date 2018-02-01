import React, { Component } from "react"
import { render } from "react-dom"
import { TriangleAreaWithBH, TriangleAreaWithABTheta, TriangleAreaWithABC, TriangleAreaWithB2Angle, TriangleAreaWithPoints } from "shared/component/Area"
import { values, mapValues } from "lodash"
import log from "shared/util/log"

class App extends Component<any, any> {
  rawInstanceMap: any = {
    "Area-Triangle-Points": TriangleAreaWithPoints,    
    "Area-Triangle-B2Angle": TriangleAreaWithB2Angle,    
    "Area-Triangle-ABC": TriangleAreaWithABC,    
    "Area-Triangle-ABTheta": TriangleAreaWithABTheta,    
    "Area-Triangle-BH": TriangleAreaWithBH,    
    
  }

  state = {
    activeInstanceName: Object.keys( this.rawInstanceMap )[ 0 ]
  }

  get activeInstance(): any {
    const Instance = this.rawInstanceMap[ this.state.activeInstanceName ]
    return <Instance />
  }

  get buttons(): any[] {
    const self = this
    let buttons: any[] = []
    mapValues( this.rawInstanceMap, createButton )
    return buttons

    function createButton( rawInstance: any, key: string ) {
      const button = (
        <button
          key={key}
          onClick={handleClick}
          style={{
            border      : `2px solid ${isActive() ? "blue" : "black"}`,
            borderRadius: `2px`,
            margin      : "5px"
          }}
        >
          {key}
        </button>
      )

      buttons.push( button )

      function handleClick() {
        self.setState( {
          activeInstanceName: key
        } )
      }

      function isActive() {
        return key === self.state.activeInstanceName
      }
    }
  }

  constructor( props: any ) {
    super( props )
  }

  render() {
    return (
      <div>
        <div>{this.buttons}</div>
        {this.activeInstance}
      </div>
    )
  }
}

render( <App />, document.getElementById( "app" ) )
