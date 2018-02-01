import React from "react"
import log from "shared/util/log"
import { calcTriangleAreaWithBH, calcTriangleAreaWithABTheta, calcTriangleAreaWithABC, calcTriangleAreaWithB2Angle, calcTriangleAreaWithPoints } from "core/calcArea"
import ComponentWithCanvas from "shared/component/ComponentWithCanvas"
import Formula from "shared/component/Formula"
import {
  drawTrianglePath,
  drawLinePath,
  drawLinesPath,
  drawArc,
  drawText
} from "shared/util/drawCanvas"
import { Point2D } from "shared/interface/index"
import calcDistance from "core/calcDistance";

const triangleA: Point2D = {
  x: 0,
  y: 0
}

const triangleB: Point2D = {
  x: 80,
  y: -120
}

const triangleC: Point2D = {
  x: 300,
  y: 0
}

export class TriangleAreaWithBH extends ComponentWithCanvas {
  A: Point2D = triangleA

  B: Point2D = triangleB

  C: Point2D = triangleC

  _pedalAngleSize: number = 10

  get b(): number {
    return Math.abs( this.C.x - this.A.x )
  }

  get h(): number {
    return Math.abs( this.B.y )
  }

  get pedalPoint(): Point2D {
    return {
      x: this.B.x,
      y: 0
    }
  }

  get pedalAngleLeftTopPoint(): Point2D {
    return {
      x: this.B.x,
      y: -this._pedalAngleSize
    }
  }

  get pedalAngleRightTopPoint(): Point2D {
    return {
      x: this.B.x + this._pedalAngleSize,
      y: -this._pedalAngleSize
    }
  }

  get pedalAngleRightBottomPoint(): Point2D {
    return {
      x: this.B.x + this._pedalAngleSize,
      y: 0
    }
  }

  componentDidMount() {
    const self = this
    const { ctx } = this

    ctx.save()
    ctx.translate( 100, 300 )

    ctx.stroke( drawTrianglePath( this.A, this.B, this.C ) )

    ctx.stroke(
      drawLinesPath( [
        this.pedalAngleLeftTopPoint,
        this.pedalAngleRightTopPoint,
        this.pedalAngleRightBottomPoint
      ] )
    )

    ctx.setLineDash( [ 5, 5 ] )
    ctx.stroke(
      drawLinePath( this.B, {
        x: this.B.x,
        y: 0
      } )
    )

    drawText( {
      ctx,
      text  : `b`,
      origin: { x: ( this.A.x + this.C.x ) / 2, y: 20 }
    } )
    drawText( {
      ctx,
      text  : `h`,
      origin: { x: this.B.x + 10, y: -Math.abs( this.B.y ) / 2 + 8 }
    } )

    ctx.restore()
  }
  render() {
    return (
      <div>
        {super.render()}
        <Formula content={`A ( \\Box ) = { \\frac { 1 } { 2 } } b h`} />
        <h6>{`Area=${ calcTriangleAreaWithBH( this.b, this.h ) }`}</h6>
      </div>
    )
  }
}

export class TriangleAreaWithABTheta extends ComponentWithCanvas {
  A: Point2D = triangleA

  B: Point2D = triangleB

  C: Point2D = triangleC

  get a(): number {
    return calcDistance( this.A, this.B )
  }

  get b(): number {
    return calcDistance( this.A, this.C )
  }

  get theta(): number {
    return Math.atan2( 120, 80 )
  }


  componentDidMount() {
    const self = this
    const { ctx } = this

    ctx.save()
    ctx.translate( 100, 300 )

    ctx.stroke( drawTrianglePath( this.A, this.B, this.C ) )

    ctx.stroke( drawArc( this.A.x, this.A.y, 10, 0, -this.theta, true ) )

    drawText( {
      ctx,
      text  : "a",
      origin: {
        x: 28,
        y: -73
      }
    } )

    drawText( {
      ctx,
      text  : "b",
      origin: {
        x: 150,
        y: 25
      }
    } )

    drawText( {
      ctx,
      text  : "θ",
      origin: {
        x: 12,
        y: -6
      }
    } )

    ctx.restore()
  }
  render() {
    return (
      <div>
        {super.render()}
        <Formula
          content={`A ( \\Box ) = { \\frac { 1 } { 2 } } a b sin \\theta`}
        />
        <h6>{`Area=${ calcTriangleAreaWithABTheta( this.a, this.b, this.theta ) }`}</h6>
      </div>
    )
  }
}

export class TriangleAreaWithABC extends ComponentWithCanvas {
  A: Point2D = triangleA

  B: Point2D = triangleB

  C: Point2D = triangleC

  get a(): number {
    return calcDistance( this.A, this.B )
  }

  get b(): number {
    return calcDistance( this.A, this.C )
  }

  get c(): number {
    return calcDistance( this.B, this.C )
  }

  componentDidMount() {
    const self = this
    const { ctx } = this

    ctx.save()
    ctx.translate( 100, 300 )

    ctx.stroke( drawTrianglePath( this.A, this.B, this.C ) )

    drawText( {
      ctx,
      text  : "a",
      origin: {
        x: 28,
        y: -73
      }
    } )

    drawText( {
      ctx,
      text  : "b",
      origin: {
        x: 150,
        y: 25
      }
    } )

    drawText( {
      ctx,
      text  : "c",
      origin: {
        x: 170,
        y: -73
      }
    } )

    ctx.restore()
  }
  render() {
    return (
      <div>
        {super.render()}
        <Formula
          content={`A ( \\Box ) = \\frac{ 1 }{ 4 } \\sqrt{ 4 a ^ 2 b ^ 2 - ( a ^ 2 + b ^ 2 - c ^ 2 ) ^ 2 } `}
        />
        <h6>{`Area=${ calcTriangleAreaWithABC( this.a, this.b, this.c ) }`}</h6>
      </div>
    )
  }
}

export class TriangleAreaWithB2Angle extends ComponentWithCanvas {
  A: Point2D = triangleA

  B: Point2D = triangleB

  C: Point2D = triangleC

  get b(): number {
    return calcDistance( this.A, this.C )
  }

  get theta(): number {
    return Math.atan2( Math.abs( this.B.y ), Math.abs( this.B.x ) )
  }

  get phi(): number {
    return Math.atan2( Math.abs( this.B.y ), Math.abs( this.C.x - this.B.x ) )
  }

  componentDidMount() {
    const self = this
    const { ctx } = this

    ctx.save()
    ctx.translate( 100, 300 )

    ctx.stroke( drawTrianglePath( this.A, this.B, this.C ) )

    ctx.stroke( drawArc( this.A.x, this.A.y, 10, 0, -this.theta, true ) )

    ctx.stroke( drawArc( this.C.x, this.C.y, 20, Math.PI, Math.PI + this.phi ) )

    drawText( {
      ctx,
      text  : "b",
      origin: {
        x: 150,
        y: 25
      }
    } )

    drawText( {
      ctx,
      text  : "θ",
      origin: {
        x: 12,
        y: -6
      }
    } )

    drawText( {
      ctx,
      text  : "φ",
      origin: {
        x: this.C.x - 39,
        y: this.C.y - 7
      }
    } )

    ctx.restore()
  }

  render() {
    return (
      <div>
        {super.render()}
        <Formula
          content={`A ( \\Box ) = \\frac { b^2 } { 2( cot \\theta + cot \\varphi ) } `}
        />
        <h6>{`Area=${ calcTriangleAreaWithB2Angle( this.b, this.theta, this.phi ) }`}</h6>
      </div>
    )
  }
}

export class TriangleAreaWithPoints extends ComponentWithCanvas {
  A: Point2D = triangleA

  B: Point2D = triangleB

  C: Point2D = triangleC

  componentDidMount() {
    const self = this
    const { ctx } = this

    ctx.save()
    ctx.translate( 100, 300 )

    ctx.stroke( drawTrianglePath( this.A, this.B, this.C ) )

    drawText( {
      ctx,
      text  : "V0",
      origin: {
        x: this.A.x - 20,
        y: this.A.y + 20
      }
    } )

    drawText( {
      ctx,
      text  : "V1",
      origin: {
        x: this.C.x + 20,
        y: this.C.y + 20
      }
    } )

    drawText( {
      ctx,
      text  : "V2",
      origin: {
        x: this.B.x,
        y: this.B.y - 20
      }
    } )

    ctx.restore()
  }

  render() {
    return (
      <div>
        {super.render()}
        <Formula
          content={`A ( \\Box ) = \\frac { ( \\text x_1 - x_0 )( y_2 - y_0 ) - ( x_2 - x_0 )( y_1 - y_0 ) } { 2 }  `}
        />
        <h6>{`Area=${ calcTriangleAreaWithPoints( this.A, this.B, this.C ) }`}</h6>
      </div>
    )
  }
}
