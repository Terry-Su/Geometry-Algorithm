import { Point2D, Radian } from "shared/interface/index"
import calcPointRotated from "core/calcPointRotated"
import { isNil } from "lodash"
import { calcVectorRadian } from "core/calcVector"
import CanvasRenderingContext2D from 'shared/interface/CanvasRenderingContext2D'

const { PI } = Math

export function drawLinesPath( points: Point2D[] ): Path2D {
  const path: Path2D = new Path2D()

  points.map( connect )

  function connect( point: Point2D, index: number ) {
    if ( index === 0 ) {
      path.moveTo( point.x, point.y )
    }
    if ( index !== 0 ) {
      path.lineTo( point.x, point.y )
    }
  }

  return path
}

export function drawLinePath( A: Point2D, B: Point2D ): Path2D {
  const path: Path2D = drawLinesPath( [ A, B ] )
  return path
}

export function drawTrianglePath( A: Point2D, B: Point2D, C: Point2D ): Path2D {
  const path: Path2D = drawLinesPath( [ A, B, C, A ] )
  return path
}

interface DrawTextProps {
  ctx: CanvasRenderingContext2D
  text?: string
  size?: number
  font?: string
  color?: string
  origin?: Point2D
}

export function drawArc(
  a?: any,
  b?: any,
  c?: any,
  d?: any,
  e?: any,
  f?: any
): Path2D {
  const path: Path2D = new Path2D()
  path.arc( a, b, c, d, e, f )
  return path
}

export function drawText( props: DrawTextProps ) {
  const {
    ctx,
    text = "",
    size = 16,
    font = "serif",
    color = "black",
    origin = {
      x: 0,
      y: 0
    }
  } = props
  ctx.fillStyle = color
  ctx.font = `${size}px ${font} `
  ctx.fillText( text, origin.x, origin.y )
}

/**
 *     **
 *       *****
 *        *******
 *       *****
 *     **
 */

export function drawArrowPath( P: Point2D, x?: Radian | Point2D ) {
  if ( typeof x === "number" || isNil( x ) ) {
    return _drawArrowPath( P, x )
  }

  if ( typeof x === "object" ) {
    const Q: Point2D = x
    const radian = calcVectorRadian( [ P, Q ] )
    return _drawArrowPath( Q, radian )
  }

  function _drawArrowPath( P: Point2D, radian: number = 0 ) {
    /**
     * width
     */
    const w = 5
    const right: Point2D = {
      x: P.x,
      y: P.y
    }
    const center: Point2D = {
      x: P.x - w,
      y: P.y
    }
    const top: Point2D = {
      x: center.x - w / 2,
      y: P.y - 3 / 4 * w
    }
    const bottom: Point2D = {
      x: center.x - w / 2,
      y: P.y + 3 / 4 * w
    }

    const rotatedCenter: Point2D = calcPointRotated( center, -radian, right )
    const rotatedTop: Point2D = calcPointRotated( top, -radian, right )
    const rotatedBottom: Point2D = calcPointRotated( bottom, -radian, right )

    const path: Path2D = drawLinesPath( [
      right,
      rotatedTop,
      rotatedCenter,
      rotatedBottom,
      right
    ] )

    return path
  }
}

export function drawCirclePath( P: Point2D, radius: number ) {
  const path = new Path2D()
  path.arc( P.x, P.y, radius, 0, PI * 2 )
  return path
}

export function drawPointPath( P: Point2D, radius: number = 3 ) {
  const path = new Path2D()
  path.arc( P.x, P.y, radius, 0, PI * 2 )
  return path
}

export function drawPedalAnglePath(
  P: Point2D,
  size: number = 5,
  direction: string = 'rightTop'
) {
  let deltaX = size
  let deltaY = size

  switch ( direction ) {
    case "leftTop":
      deltaX = -size
      deltaY = -size
      break
    case "rightTop":
      deltaX = size
      deltaY = -size
      break
    case "leftBottom":
      deltaX = -size
      deltaY = size
      break
    case "rightBottom":
      deltaX = size
      deltaY = -size
      break
  }

  const PointX: Point2D = {
    x: P.x + deltaX,
    y: P.y
  }
  const PointY: Point2D = {
    x: P.x,
    y: P.y + deltaY
  }
  const PointOutside: Point2D = {
    x: PointX.x,
    y: PointY.y
  }
  
  const path: Path2D = drawLinesPath( [ PointX, PointOutside, PointY ] )

  return path
}
