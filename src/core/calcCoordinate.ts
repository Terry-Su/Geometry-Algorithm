/**
 * Calculate something related to coordinate
 * Caveat: Current coordinate is based on canvas, 
 * so the positive Y axis points to the bottom 
 * instead of the top
 */

import { Point2D } from 'shared/interface/index';


export function isPointOnOrigin( P: Point2D ) {
  return P.x === 0 && P.y === 0
}

export function isPointOnXAxisPositive( P: Point2D ) {
  return P.y === 0 && P.x > 0
}

export function isPointOnXAxisNegative( P: Point2D ) {
  return P.y === 0 && P.x < 0
}

export function isPointOnYAxisPositive( P: Point2D ) {
  return P.x === 0 && P.y > 0
}

export function isPointOnYAxisNegative( P: Point2D ) {
  return P.x === 0 && P.y < 0
}

export function isPointOn1Quadrant( P: Point2D ) {
  return P.x > 0 && P.y < 0
}

export function isPointOn2Quadrant( P: Point2D ) {
  return P.x < 0 && P.y < 0
}

export function isPointOn3Quadrant( P: Point2D ) {
  return P.x < 0 && P.y > 0
}

export function isPointOn4Quadrant( P: Point2D ) {
  return P.x > 0 && P.y > 0
}

