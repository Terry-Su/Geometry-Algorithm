import { Point2D } from 'shared/interface/index';

export default function ( P0: Point2D, P1: Point2D ) {
  const { pow, sqrt } = Math
  const res = sqrt(
    pow( P1.y - P0.y, 2 ) +
    pow( P1.x - P0.x, 2 )
  )
  return res
}