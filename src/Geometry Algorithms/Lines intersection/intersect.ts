import { Point2D } from "../../shared/interface/index";


// A = y2-y1
// B = x1-x2
// C = A*x1+B*y1

// A1x + B1y = C1
// A2x + B2y = C2


// double det = A1*B2 - A2*B1
// if(det == 0){
//     //Lines are parallel
// }else{
//     double x = (B2*C1 - B1*C2)/det
//     double y = (A1*C2 - A2*C1)/det
// }


export default function intersect( line1: [ Point2D, Point2D ], line2: [ Point2D, Point2D ] ) {
  const P11 = line1[ 0 ]
  const P12 = line1[ 1 ]

  const { x: x11, y: y11 } = P11
  const { x: x12, y: y12 } = P12

  const A1 = y12 - y11
  const B1 = x11 - x12
  const C1 = A1 * x11 + B1 * y11

  const P21 = line2[ 0 ]
  const P22 = line2[ 1 ]

  const { x: x21, y: y21 } = P21
  const { x: x22, y: y22 } = P22

  const A2 = y22 - y21
  const B2 = x21 - x22
  const C2 = A2 * x21 + B2 * y21

  const delta = A1 * B2 - A2 * B1

  if ( delta === 0 ) {
    return 'Parallel'
  } else {
    return {
      x: ( B2 * C1 - B1 * C2 ) / delta,
      y: ( A1 * C2 - A2 * C1 ) / delta
    }
  }

}