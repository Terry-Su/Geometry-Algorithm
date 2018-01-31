import React, { Component } from "react"
import { render } from "react-dom"
import Area from "../../shared/components/Area";




class App extends Component {
  render() {
    return <div>
      <Area />
    </div>
  }
}

render( <App />, document.getElementById( "app" ) )
