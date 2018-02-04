import { Point2D, Vector } from '../../../shared/interface/index';
import { calcDistancePointToLine } from '../../../core/calcDistance';
import { log } from '../../../../../MP/build/util/index';

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


    const v: Vector = [
      {
        x: 0,
        y: 0
      },
      {
        x: w,
        y: -h
      }
    ]
    
    const res = calcDistancePointToLine( P, v )


    // expect(
    //   res
    // ).toBe( res )
  } )
} )