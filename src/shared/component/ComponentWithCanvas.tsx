import React, { Component } from "react"
import log from "shared/util/log";
import { calcTriangleAreaWithBH } from 'core/calcArea';


export default class ComponentWithCanvas extends Component {
  public canvas: HTMLCanvasElement
  public canvasWidth: number = 500
  public canvasHeight: number = 500

  get ctx(): CanvasRenderingContext2D {
    return this.canvas.getContext( '2d' )
  }

  render() {
    return (
      <div>
        <canvas ref={ dom => { this.canvas = dom } } width={ this.canvasWidth } height={ this.canvasHeight } />
      </div>
    )
  }
}
