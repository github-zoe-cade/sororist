import {
  createVoronoiTessellation,
  random,
} from "https://cdn.skypack.dev/@georgedoescode/generative-utils@1.0.34";
import { theme } from "styles/theme";

import { Shape } from "components/basics/Shape";

const width = 600;
const height = 500;

const colors = [
  theme.colors.alpha100,
  theme.colors.beta100,
  theme.colors.gamma100,
  theme.colors.delta100,
];

const shapes = ["circle", "grid", "polygon", "triangle", "spring"];

const spaceHoldersRadius = 10;
const nbSquares = 10;
const nbSquaresAbove = 4;

export const HeaderDecoration = () => {
  const spaceHolders = [];
  for (let i = 0; i < 6; i++) {
    const angleStep = (Math.PI * 2) / 10;
    const angle = angleStep * i;
    const x = width / 2 + Math.cos(angle) * spaceHoldersRadius;
    const y = height / 2 + Math.sin(angle) * spaceHoldersRadius;
    spaceHolders.push({ x, y });
  }

  const voronoiPoints = [];
  for (let i = 0; i < nbSquares; i++) {
    const angleStep = (Math.PI * 2) / nbSquares;
    const angle = angleStep * i;
    const x = width / 2 + Math.cos(angle) * Math.max(Math.random() * 150, 100);
    const y = height / 2 + Math.sin(angle) * Math.max(Math.random() * 150, 100);
    voronoiPoints.push({ x, y });
  }

  const lastVoronoi = voronoiPoints.pop();
  const points = [
    ...spaceHolders,
    ...voronoiPoints,
    { x: width / 2, y: height / 2 },
    lastVoronoi,
  ];

  const tessellation = createVoronoiTessellation({
    width,
    height,
    points,
    relaxIterations: 1,
  });

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${width} ${height}`}
      style={{ overflow: "visible" }}
      preserveAspectRatio="xMinYMin meet"
    >
      <defs>
        <rect id="rect" x="100" y="100" width="400" height="280" rx="15" stroke="none" fill="none" />
        <clipPath id="clip">
          <use xlinkHref="#rect" />
        </clipPath>
      </defs>

      {tessellation.cells.map((cell, i) => {
        const size = cell.innerCircleRadius;
        const radiusMultiplicator = random(0.3, 2);

        const shouldNotRender = i < 6;
        if (shouldNotRender) {
          return null;
        }

        const shape = random(shapes);

        return i === tessellation.cells.length - 2 ? (
          <>
          <use xlinkHref="#rect" />
          <image
            // xlinkHref="/images/cover.jpg"
            // clipPath="url(#clip)"
            width="420"
            height="280"
            x={100}
            y={98}
            key={i}
          />
          </>
        ) : (
          <Shape
            shape={shape}
            x={cell.centroid.x}
            y={cell.centroid.y}
            size={size * radiusMultiplicator}
            fill={random(colors)}
            key={`${shape}${i}`}
          />
        );
      })}
      {/* {tessellation.cells.map((cell, i) => {
        return (
          <polygon key={i} points={cell.points} fill="none" stroke="#000"></polygon>
        );
      })} */}
    </svg>
  );
};
