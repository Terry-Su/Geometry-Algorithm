import { Point2D, Vector } from "shared/interface/index"
import { calcRadianBetween2Vector, calcVectorLength } from "./calcVector"

const { sin } = Math

export function calcDistanceBetween2Points( P0: Point2D, P1: Point2D ) {
  const { pow, sqrt } = Math
  const res = sqrt( pow( P1.y - P0.y, 2 ) + pow( P1.x - P0.x, 2 ) )
  return res
}

export function calcDistancePointToLine( P: Point2D, v: Vector ) {
  const w: Vector = [ v[ 0 ], P ]

  const radian: number = calcRadianBetween2Vector( v, w )

  const distance = calcVectorLength( w ) * sin( radian )
  return distance
}
