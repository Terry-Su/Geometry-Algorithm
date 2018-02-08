import { Point2D, Vector } from '../../../shared/interface/index';
import { calcVectorRadian } from '../../../core/calcVector';
import { log } from '../../../../../MP/build/util/index';
import { RADIAN_TO_DEGREE } from '../../../core/calcGeneral';


const { tan } = Math

describe( "CalcDistancePointToLine", () => {
  it( "Test:", () => {
    const P: Point2D = {
      x: -100,
      y: -100
    }
    
    /**
     * Absolute width
     */
    const w = 100
    /**
     * Absolute height
     */
    const h = w * tan( Math.PI / 3 )

    /**
     * Quadrant 1
     */
    const v1: Vector = [
      {
        x: 0,
        y: 0
      },
      {
        x: w,
        y: -h
      }
    ]
    const angle1 = calcVectorRadian( v1 ) * RADIAN_TO_DEGREE

    /**
     * Quadrant 2
     */
    const v2: Vector = [
      {
        x: 0,
        y: 0
      },
      {
        x: -w,
        y: -h
      }
    ]
    const angle2 = calcVectorRadian( v2 ) * RADIAN_TO_DEGREE

    /**
     * Quadrant 3
     */
    const v3: Vector = [
      {
        x: 0,
        y: 0
      },
      {
        x: -w,
        y: h
      }
    ]
    const angle3 = calcVectorRadian( v3 ) * RADIAN_TO_DEGREE

    /**
     * Quadrant 4
     */
    const v4: Vector = [
      {
        x: 0,
        y: 0
      },
      {
        x: w,
        y: h
      }
    ]
    const angle4 = calcVectorRadian( v4 ) * RADIAN_TO_DEGREE


    log( {
      angle1,
      angle2,
      angle3,
      angle4,
    } )

    // expect(
    //   res
    // ).toBe( res )
  } )
} )