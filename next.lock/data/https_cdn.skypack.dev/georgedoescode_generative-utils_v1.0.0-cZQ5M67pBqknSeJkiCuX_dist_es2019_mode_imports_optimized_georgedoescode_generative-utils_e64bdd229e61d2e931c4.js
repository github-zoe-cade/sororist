function random() {
  const isArray = Array.isArray(arguments[0]);
  if (isArray) {
    const targetArray = arguments[0];
    return targetArray[random(0, targetArray.length - 1, true)];
  } else {
    const min = arguments[0];
    const max = arguments[1];
    const clamp = arguments[2] || false;
    const val = Math.random() * (max - min) + min;
    return clamp ? Math.round(val) : val;
  }
}
function formatPoints(points, close) {
  points = [...points];
  if (!Array.isArray(points[0])) {
    points = points.map(({x, y}) => [x, y]);
  }
  if (close) {
    const lastPoint = points[points.length - 1];
    const secondToLastPoint = points[points.length - 2];
    const firstPoint = points[0];
    const secondPoint = points[1];
    points.unshift(lastPoint);
    points.unshift(secondToLastPoint);
    points.push(firstPoint);
    points.push(secondPoint);
  }
  return points.flat();
}
function spline(points = [], tension = 1, close = false, cb) {
  points = formatPoints(points, close);
  const size = points.length;
  const last = size - 4;
  const startPointX = close ? points[2] : points[0];
  const startPointY = close ? points[3] : points[1];
  let path = "M" + [startPointX, startPointY];
  cb && cb("MOVE", [startPointX, startPointY]);
  const startIteration = close ? 2 : 0;
  const maxIteration = close ? size - 4 : size - 2;
  const inc = 2;
  for (let i = startIteration; i < maxIteration; i += inc) {
    const x0 = i ? points[i - 2] : points[0];
    const y0 = i ? points[i - 1] : points[1];
    const x1 = points[i + 0];
    const y1 = points[i + 1];
    const x2 = points[i + 2];
    const y2 = points[i + 3];
    const x3 = i !== last ? points[i + 4] : x2;
    const y3 = i !== last ? points[i + 5] : y2;
    const cp1x = x1 + (x2 - x0) / 6 * tension;
    const cp1y = y1 + (y2 - y0) / 6 * tension;
    const cp2x = x2 - (x3 - x1) / 6 * tension;
    const cp2y = y2 - (y3 - y1) / 6 * tension;
    path += "C" + [cp1x, cp1y, cp2x, cp2y, x2, y2];
    cb && cb("CURVE", [cp1x, cp1y, cp2x, cp2y, x2, y2]);
  }
  return path;
}
function map(n, start1, end1, start2, end2) {
  return (n - start1) / (end1 - start1) * (end2 - start2) + start2;
}
function pointsInPath(path, numPoints = 10) {
  const pathLength = path.getTotalLength();
  const step = pathLength / numPoints;
  const points = [];
  for (let i = 0; i < pathLength; i += step) {
    points.push(path.getPointAtLength(i));
  }
  return points;
}
export {map, pointsInPath, random, spline};
export default null;
