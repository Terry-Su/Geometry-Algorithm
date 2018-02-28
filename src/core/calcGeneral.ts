import { Point2D, Segment } from "../shared/interface/index"

export const RADIAN_TO_DEGREE = 180 / Math.PI

export const DEGREE_TO_RADIAN = Math.PI / 180

export function isPointOnPoints( P: Point2D, points: Point2D[] ) {
  const res: boolean = points.some( isP )

  function isP( point: Point2D ): boolean {
    return point.x === P.x && point.y === P.y
  }

  return res
}

export function isPointOnAnyPolygonSegment( P: Point2D, polygonVertices: Point2D[] ) {
  let res: boolean = false
  for ( let i: number = 0; i < polygonVertices.length - 1; i++ ) {
    const V0: Point2D = polygonVertices[ i ]
    const V1: Point2D = polygonVertices[ i + 1 ]
    const segment: Segment = [ V0, V1 ]
    
    if ( isPointOnSegment( P, segment ) ) {
      res = true
      return res
    }
  } 
  return res 
}

export function isPointOnSegment( P: Point2D, segment: Segment ) {
  let res: boolean = false
  if ( isPointOnPoints( P, segment ) ) {
    res = true
    return res
  }

  const { x: x0, y: y0 }: Point2D = segment[ 0 ]
  const { x: x1, y: y1 }: Point2D = segment[ 1 ]
  const { x: xp, y: yp }: Point2D = P 
  

  const vt: number = ( y1 - y0 ) / ( x1 - x0 )
  const b: number = y0 - vt * x0
  res = yp === vt * xp + b

  return res
}

/**
 * Whether point is on the edge of polygon path
 */
export function isPointOnPolygonPathEdge( P: Point2D, polygonVertices: Point2D[] ): boolean {
  const res: boolean = isPointOnAnyPolygonSegment( P, polygonVertices )
  return res
}