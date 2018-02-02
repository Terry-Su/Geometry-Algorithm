import React from "react"
import ComponentWithCanvas from "shared/component/ComponentWithCanvas"
import Formula from "shared/component/Formula"
import { Point2D } from "shared/interface/index"
import { calcDistancePointToLine } from 'core/calcDistance';
import {
  drawLinePath,
  drawArrowPath,
  drawPointPath,
  drawText,
  drawPedalAnglePath
} from "shared/util/drawCanvas"

const { abs } = Math


export class PointToPedalOnLine extends ComponentWithCanvas {
  P0: Point2D = {
    x: 0,
    y: 0
  }

  P1: Point2D = {
    x: 200,
    y: 0
  }

  P: Point2D = {
    x: 50,
    y: -100
  }

  get pointPetal(): Point2D {
    return {
      x: this.P.x,
      y: 0
    }
  }

  get lineLPointLeft(): Point2D {
    return {
      x: this.P0.x - 50,
      y: this.P0.y
    }
  }

  get lineLPointRight(): Point2D {
    return {
      x: this.P1.x + 50,
      y: this.P1.y
    }
  }

  componentDidMount() {
    const self = this
    const { ctx } = this
    
    ctx.save()
    ctx.translate( 100, 300 )

    ctx.fill( drawPointPath( this.P0 ) )
    ctx.fill( drawPointPath( this.P1 ) )
    ctx.fill( drawPointPath( this.P ) )

    ctx.stroke( drawLinePath( this.lineLPointLeft, this.lineLPointRight ) )
    ctx.stroke( drawLinePath( this.P0, this.P ) )    

    ctx.fill( drawArrowPath( this.P1 ) )
    ctx.fill( drawArrowPath( this.P0, this.P ) )

    ctx.stroke( drawPedalAnglePath( this.pointPetal, 5, "leftTop" ) )

    ctx.setLineDash( [ 5, 5 ] )
    ctx.stroke( drawLinePath( this.pointPetal, this.P ) )

    drawText( {
      ctx,
      text  : "P0",
      origin: {
        x: this.P0.x,
        y: this.P0.y + 20
      }
    } )

    drawText( {
      ctx,
      text  : "P",
      origin: {
        x: this.P.x - 20,
        y: this.P.y
      }
    } )

    drawText( {
      ctx,
      text  : "P1",
      origin: {
        x: this.P1.x,
        y: this.P1.y + 20
      }
    } )

    drawText( {
      ctx,
      text  : "d( P, L )",
      origin: {
        x: this.P.x + 20,
        y: -abs( this.P.y / 2 + 8 )
      }
    } )

    drawText( {
      ctx,
      text  : "w",
      origin: {
        x: this.P0.x + 16,
        y: this.P0.y - 72
      }
    } )

    drawText( {
      ctx,
      text  : "v",
      origin: {
        x: this.P0.x + 94,
        y: this.P0.y + 15
      }
    } )

    drawText( {
      ctx,
      text: "L",
      origin: {
        x: this.P1.x + 70,
        y: this.P1.y + 8
      }
    } )

    ctx.restore()
  }
  render() {
    return (
      <div>
        {super.render()}
        <Formula content={`
        d ( P, L ) = \\frac { | v \\perp w | } { | v | } 
        `} />
        <h6>{`d ( P, L )=${ calcDistancePointToLine( this.P, [ this.P0, this.P1 ] ) }`}</h6>
      </div>
    )
  }
}
