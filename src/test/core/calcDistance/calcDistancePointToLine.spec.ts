import { Point2D, Vector } from '../../../shared/interface/index';
import { calcDistancePointToLine } from '../../../core/calcDistance';
import { log } from '../../../../../MP/build/util/index';

describe( "CalcDistancePointToLine", () => {
  it( "Test:", () => {
    const P: Point2D = {
      x: 100,
      y: 100
    }
    
    const v: Vector = [
      {
        x: 0,
        y: 0
      },
      {
        x: 200,
        y: 0
      }
    ]
    
    const res = calcDistancePointToLine( P, v )

    log( res )

    expect(
      res
    ).toBe( res )
  } )
} )