import { isPointOnPolygonPathEdge } from "../../../core/calcGeneral";

describe( "calcGeneral", () => {
  it( "IsPointOnPolygonPath", () => {
    const instance = {
      P: {
        x: 0,
        y: 1
      },
      P0: {
        x: 0,
        y: 0
      },
      P1: {
        x: 0,
        y: 0
      },
      P2: {
        x: 0,
        y: 0
      },
      P3: {
        x: 0,
        y: 0
      },
    }

    const { P, P0, P1, P2, P3 } = instance

    const testRes: boolean = isPointOnPolygonPathEdge( P, [ P0, P1, P2, P3 ] )
    expect( testRes ).toBe( true )
  } )
})