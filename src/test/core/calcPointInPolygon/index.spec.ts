import {
  isLeft,
  pointInPolygonWindingNumber,
  pointInPolygonCrossingNumber
} from "../../../core/calcPointInPolygon"

describe( "CalcPointInPolygon", () => {
  it( "PointInPolygonWindingNumber", () => {
    const instance = {
      P: {
        x: 20,
        y: 0
      },
      points: [
        {
          x: 10,
          y: 0
        },
        {
          x: 20,
          y: 0
        },
        {
          x: 0,
          y: 10
        },
        {
          x: -10,
          y: 0
        },
        {
          x: 0,
          y: -10
        },
      ]
    }

    const testRes = pointInPolygonWindingNumber( instance.P, instance.points )
    expect( testRes ).toBe( true )
  } )
  it( "pointInPolygonCrossingNumber", () => {
    const instance = {
      P: {
        x: 1,
        y: 1
      },
      points: [
        {
          x: 10,
          y: 0
        },
        {
          x: 20,
          y: 0
        },
        {
          x: 0,
          y: 10
        },
        {
          x: -10,
          y: 0
        },
        {
          x: 0,
          y: -10
        },
      ]
    }

    const testRes = pointInPolygonCrossingNumber( instance.P, instance.points )
    expect( testRes ).toBe( true )
  } )
  it( "IsLeft: ", () => {
    const instance = {
      L0: {
        x: 100,
        y: 0
      },
      L1: {
        x: 10,
        y: 10
      },
      P: {
        x: 0,
        y: 0
      }
    }

    const testRes: boolean = isLeft( instance.L0, instance.L1, instance.P )
    expect( testRes ).toBe( true )
  } )
} )
