import calcPointScaled from '../../../core/calcPointScaled';
import { Point2D } from 'shared/interface/index';


describe( "CalcPointScaled", () => {
  it( "Test:", () => {
    const point: Point2D = {
      x: 1,
      y: 10
    }
    const center: Point2D = {
      x: 0,
      y: 0
    }
    
    const res: Point2D = calcPointScaled( point, [ 100, 200 ], center )
    
    console.log( res )
    // expect(
    //   res
    // ).toBe( res )
  } )
} )