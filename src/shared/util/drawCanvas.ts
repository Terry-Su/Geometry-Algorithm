import { Point2D } from "shared/interface/index"

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
