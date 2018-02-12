import { Point2D } from 'shared/interface/index';
import { isNil, isNumber, isArray } from 'lodash';

/**
 * Get scaled point
 * @param {Point2D} point 
 * @param {number | number[]} s same s for sx and sy or [sx, sy] 
 * @param {Point2D} center 
 */
export default function(
	point: Point2D,
	s: number | number[],
	center: Point2D = { x: 0, y: 0 }
): Point2D {
	const { x, y }: Point2D = point

	let sx: number
	let sy: number

	if ( isNumber( s ) ) {
		sx = s
		sy = s
	}

	if ( isArray( s ) ) {
		sx = s[0]
		sy = s[1]
	}

	

	

	return
}
