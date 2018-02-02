import { Vector, Point2D } from "shared/interface/index"
import {
  isPointOnXAxisPositive,
  isPointOnXAxisNegative,
  isPointOnYAxisPositive,
  isPointOnYAxisNegative,
  isPointOn1Quadrant,
  isPointOn2Quadrant,
  isPointOn3Quadrant,
  isPointOn4Quadrant
} from "./calcCoordinate"

const { abs, atan2, sqrt, pow, cos, sin } = Math


export function calcVectorLength( v: Vector ): number {
  const res: number = sqrt( pow( v[ 1 ].y - v[ 0 ].y, 2 ) + pow( v[ 1 ].x - v[ 0 ].x, 2 ) )
  return res
}

/**
 * Calculate the angle between vector and x axis
 */
export function calcVectorRadian( v: Vector ): number {
  /**
   * Relative point
   */
  const R: Point2D = {
    x: v[ 1 ].x - v[ 0 ].x,
    y: v[ 1 ].y - v[ 0 ].y
  }

  let radian = 0
  const absoluteRadian = abs( atan2( R.y, R.x ) )

  if ( isPointOnXAxisPositive( R ) ) {
    radian = 0
  }

  if ( isPointOnXAxisNegative( R ) ) {
    radian = Math.PI
  }

  if ( isPointOnYAxisPositive( R ) ) {
    radian = Math.PI / 2
  }

  if ( isPointOnYAxisNegative( R ) ) {
    radian = Math.PI * 3 / 2
  }

  if ( isPointOn1Quadrant( R ) ) {
    radian = absoluteRadian
  }

  if ( isPointOn2Quadrant( R ) ) {
    radian = Math.PI - absoluteRadian
  }

  if ( isPointOn3Quadrant( R ) ) {
    radian = Math.PI + absoluteRadian
  }

  if ( isPointOn4Quadrant( R ) ) {
    radian = -absoluteRadian
  }

  return radian
}

export function calcRadianBetween2Vector( v: Vector, w: Vector ): number {
  const res: number = calcVectorRadian( w ) -  calcVectorRadian( v )
  return res
}

export function calcMultiply( v: Vector, w: Vector ): number {
  const radian: number = calcRadianBetween2Vector( v, w )
  const res: number = calcVectorLength( v ) * calcVectorLength( w ) * cos( radian )
  return res
}

export function calcPerpMultiply( v: Vector, w: Vector ): number {
  const radian = calcRadianBetween2Vector( v, w )
  const res = calcVectorLength( v ) * calcVectorLength( w ) * sin( radian )
  return res
}
