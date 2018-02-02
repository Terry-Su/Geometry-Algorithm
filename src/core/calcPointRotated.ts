import { Point2D } from 'shared/interface/index';


export default function(
	point: Point2D,
	radian: number,
	center: Point2D = { x: 0, y: 0 }
): Point2D {
	const relative: Point2D = {
		x: point.x - center.x,
		y: point.y - center.y
	}

	const rotated: Point2D = {
		x:
			relative.x * Math.cos( radian ) -
			relative.y * Math.sin( radian ) +
			center.x,
		y:
			relative.x * Math.sin( radian ) +
			relative.y * Math.cos( radian ) +
			center.y
	}

	return rotated
}
