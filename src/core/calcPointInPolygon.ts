import { Point2D } from "../shared/interface/index"
import { log } from "console"
import { isPointOnPolygonPath } from "./calcGeneral"

/**
 * Get area to check if point P is at the left or left side of vector from L0 to L1
 * Attention: L0 should be the bottom of L1( clockwise )
 */
function getArea( L0: Point2D, L1: Point2D, P: Point2D ) {
  const { x: x0, y: y0 }: Point2D = L0
  const { x: x1, y: y1 }: Point2D = L1
  const { x: xp, y: yp }: Point2D = P

  /**
   * http://geomalgorithms.com/a01-_area.html
   */
  return ( x1 - x0 ) * ( yp - y0 ) - ( xp - x0 ) * ( y1 - y0 )
}

/**
 * Check if point P is on the left side of vector from L0 to L1
 * Area llgorithm: http://geomalgorithms.com/a01-_area.html
 */
export function isLeft( L0: Point2D, L1: Point2D, P: Point2D ) {
  const area: number = getArea( L0, L1, P )
  return area > 0
}

/**
 * Check if point P is on the right side of vector from L0 to L1
 * Area llgorithm: http://geomalgorithms.com/a01-_area.html
 */
export function isRight( L0: Point2D, L1: Point2D, P: Point2D ) {
  const area: number = getArea( L0, L1, P )
  return area < 0
}


/**
 * Check if point P is inside of polygon with winding number algorithm
 * Algorithm: http://geomalgorithms.com/a03-_inclusion.html
 * @param {Point2D} P point P
 * @param {Point2D[]} polygonVertices vertices of polygon path in clockwise or counterclockwise order
 */
export function pointInPolygonWindingNumber(
  P: Point2D,
  polygonVertices: Point2D[]
) {
  /**
   * Winding nunebr
   */
  let wn = 0

  const points: Point2D[] = polygonVertices

  for ( let i: number = 0; i < points.length - 1; i++ ) {
    const V0: Point2D = points[ i ]
    const V1: Point2D = points[ i + 1 ]

    const { x: x0, y: y0 }: Point2D = V0
    const { x: x1, y: y1 }: Point2D = V1
    const { x: xp, y: yp }: Point2D = P

    /**
     * Upward
     */
    if ( y0 <= yp && y1 > yp && isLeft( V0, V1, P ) ) {
      wn = wn + 1
    }
    /**
     * Downward
     */
    if ( y0 > yp && y1 <= yp && isRight( V0, V1, P ) ) {
      wn = wn - 1
    }
  }

  const pointOnPolygonPath: boolean = isPointOnPolygonPath( P, points )
  const res: boolean = pointOnPolygonPath || wn !== 0

  return res
}

/**
 * Check if point P is inside of polygon with crossing number algorithm
 * Algorithm: http://geomalgorithms.com/a03-_inclusion.html
 * @param {Point2D} P point P
 * @param {Point2D[]} polygonVertices vertices of polygon path in clockwise or counterclockwise order
 */
export function pointInPolygonCrossingNumber(
  P: Point2D,
  polygonVertices: Point2D[]
) {
  /**
   * Crossing number
   */
  let cn = 0

  const points: Point2D[] = polygonVertices

  for ( let i: number = 0; i < points.length - 1; i++ ) {
    const V0: Point2D = points[ i ]
    const V1: Point2D = points[ i + 1 ]

    const { x: x0, y: y0 }: Point2D = V0
    const { x: x1, y: y1 }: Point2D = V1
    const { x: xp, y: yp }: Point2D = P

    /**
     * Upward or downward
     */
    if (
      ( y0 <= yp && y1 > yp ) ||
      ( y0 > yp && y1 <= yp )
    ) {
      const interset: Point2D = getIntersectedPoint( x0, y0, x1, y1, yp )
      if ( interset.x > xp ) {
        cn = cn + 1
      }
    }
  }

  const isCnEven: boolean = isEven( cn )
  const pointOnPolygonPath: boolean = isPointOnPolygonPath( P, points )
  const res: boolean = pointOnPolygonPath || isCnEven

  return res

  function getIntersectedPoint( x0: number, y0: number, x1: number, y1: number, yp: number ): Point2D {
    /**
     * The slope of line
     */
    const vt: number = ( y1 - y0 ) / ( x1 - x0 )
    /**
     * y = vt * x + b
     */
    const b: number = y0 - vt * x0
    const res: Point2D = {
      x: ( yp - b ) / vt,
      y: yp
    }
    return res 
  }

  function isEven( n: number ): boolean {
    return n % 2 !== 0
  }
}
