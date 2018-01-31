import React, { Component } from "react"
import log from "shared/utils/log"
import { calcTriangleAreaWithBH } from "core/calcArea"
import ComponenetWithCanvas from "./ComponenetWithCanvas"

export default class Area extends ComponenetWithCanvas {
  public canvas: HTMLCanvasElement

  public b: number = 200
  public h: number = 100

  public _fontSize = 16
  public _pedalX: number = 30
  public _pedalAngleSize: number = 10

  constructor( props: any ) {
    super( props )

    this.canvasWidth = 300
    this.canvasHeight = 200
  }

  componentDidMount() {
    const self = this
    const { ctx } = this

    ctx.save()
    ctx.translate( 0, this.canvas.height - 2 * this._fontSize )

    ctx.stroke( getTrianglePath() )

    ctx.stroke( getPedalAnglePath() )

    ctx.setLineDash( [ 5, 5 ] )
    ctx.stroke( getHeightPath() )

    ctx.font = `${this._fontSize}px serif`
    ctx.fillText( `b=${this.b}`, this.b / 2, this._fontSize * 3 / 2 )
    ctx.fillText( `h=${this.h}`, this._pedalX + 10, -this.h / 2 )

    ctx.restore()

    function getTrianglePath(): Path2D {
      const path: Path2D = new Path2D()
      path.moveTo( 0, 0 )
      path.lineTo( self._pedalX, -self.h )
      path.lineTo( self.b, 0 )
      path.lineTo( 0, 0 )
      return path
    }

    function getHeightPath(): Path2D {
      const path: Path2D = new Path2D()
      path.moveTo( self._pedalX, 0 )
      path.lineTo( self._pedalX, -self.h )
      return path
    }

    function getPedalAnglePath(): Path2D {
      const path: Path2D = new Path2D()
      path.moveTo( self._pedalX, -self._pedalAngleSize )
      path.lineTo( self._pedalX + self._pedalAngleSize, -self._pedalAngleSize )
      path.lineTo( self._pedalX + self._pedalAngleSize, 0 )
      return path
    }
  }
  render() {
    return (
      <div>
        {super.render()}
        <h6>Area: {calcTriangleAreaWithBH( this.b, this.h )}</h6>
      </div>
    )
  }
}
