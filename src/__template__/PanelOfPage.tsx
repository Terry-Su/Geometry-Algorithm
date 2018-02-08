import React from "react"
import ComponentWithCanvas from "shared/component/ComponentWithCanvas"
import Formula from "shared/component/Formula"


export class PanelOfPage extends ComponentWithCanvas {
  componentDidMount() {
    const self = this
    const { ctx } = this
    
    ctx.save()

    ctx.restore()
  }
  render() {
    return (
      <div>
        {super.render()}
        <Formula content={``} />
        <h6>{``}</h6>
      </div>
    )
  }
}
