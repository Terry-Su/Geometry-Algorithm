import { Point2D } from "shared/interface/index"

export function calcTriangleAreaWithBH( b: number, h: number ) {
  const res = b * h / 2
  return res
}

export function calcTriangleAreaWithABTheta(
  a: number,
  b: number,
  theta: number
) {
  const res = a * b * Math.sin( theta ) / 2
  return res
}

export function calcTriangleAreaWithABC( a: number, b: number, c: number ) {
  const { pow, sqrt } = Math
  const res =
    sqrt(
      4 * pow( a, 2 ) * pow( b, 2 ) - pow( pow( a, 2 ) + pow( b, 2 ) - pow( c, 2 ), 2 )
    ) / 4
  return res
}

export function calcTriangleAreaWithB2Angle(
  b: number,
  theta: number,
  phi: number
) {
  const { pow } = Math
  const res = pow( b, 2 ) / ( 2 * ( cot( theta ) + cot( phi ) ) )
  return res

  function cot( angle: number ) {
    return 1 / Math.tan( angle )
  }
}

export function calcTriangleAreaWithPoints(
  P0: Point2D,
  P1: Point2D,
  P2: Point2D
) {
  const res =
    ( ( P1.x - P0.x ) * ( P2.y - P0.y ) - ( P2.x - P0.x ) * ( P1.y - P0.y ) ) / 2
  return res
}
