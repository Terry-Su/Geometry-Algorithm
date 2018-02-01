import React, { Component } from "react"
import { render } from "react-dom"
import { values, mapValues } from "lodash"

export default class PanelDisplayTabInstances extends Component<any, any> {
  rawInstanceMap: any = {}

  state = {
    activeInstanceName: this.activeInstanceName
  }

  get activeInstanceName(): string {
    return Object.keys( this.rawInstanceMap )[ 0 ]
  }
 
  get activeInstance(): any {
    const Instance = this.rawInstanceMap[ this.state.activeInstanceName ] 
    return Instance ? <Instance /> : null
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
