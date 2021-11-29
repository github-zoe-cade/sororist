import {
  createVoronoiTessellation,
  random,
} from "https://cdn.skypack.dev/@georgedoescode/generative-utils@1.0.37";
import { theme } from "styles/theme";

import { Shape } from "components/basics/Shape";
import React from "react";

const colors = [
  theme.colors.alpha100,
  theme.colors.beta100,
  theme.colors.gamma100,
  theme.colors.delta100,
];

const shapes = ["circle", "polygon", "spring", "triangle", "grid"];

const spaceHoldersRadius = 10;
const nbSquares = 10;

type VoronoiDecoration = {
  image: string;
  height: number;
  width: number;
  pictureHeight: number;
  pictureWidth: number;
  pictureShape?: string;
};

export const VoronoiDecoration = ({
  image,
  height,
  width,
  pictureHeight,
  pictureWidth,
  pictureShape = "rectangle",
}: VoronoiDecoration) => {
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

  const center = { x: width / 2, y: height / 2 };
  const evenVoronoiPoints = voronoiPoints.filter((_, i) => i % 2 === 0);
  const oddVoronoiPoints = voronoiPoints.filter((_, i) => i % 2 !== 0);
  const points = [
    ...spaceHolders,
    ...oddVoronoiPoints,
    center,
    ...evenVoronoiPoints,
  ];

  const tessellation = createVoronoiTessellation({
    width,
    height,
    points,
    relaxIterations: 1,
  });

  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${width} ${height}`}
        style={{ overflow: "visible" }}
        preserveAspectRatio="xMinYMin meet"
      >
        <defs>
          {pictureShape === "circle" ? (
            <circle
              id="img-container"
              cx={height / 2}
              cy={width / 2}
              r={pictureHeight / 2}
              stroke="none"
              fill="none"
            />
          ) : (
            <rect
              id="img-container"
              x="100"
              y="100"
              width={pictureWidth}
              height={pictureHeight}
              rx="15"
              stroke="none"
              fill="none"
            />
          )}

          <clipPath id="clip">
            <use xlinkHref="#img-container" />
          </clipPath>
        </defs>

        {tessellation.cells.map((cell, i) => {
          const size = cell.innerCircleRadius;
          const radiusMultiplicator = random(0.5, 2.5);

          const shouldNotRender = i < 6;
          if (shouldNotRender) {
            return null;
          }

          const shape = random(shapes);

          return i === tessellation.cells.length - 6 ? (
            <React.Fragment key={i}>
              <use xlinkHref="#img-container" />
              <image
                xlinkHref={image}
                clipPath="url(#clip)"
                height={pictureHeight + 10}
                width={pictureWidth}
                x={100}
                y={95}
              />
            </React.Fragment>
          ) : (
            <Shape
              shape={shape}
              x={cell.centroid.x}
              y={cell.centroid.y}
              size={size * radiusMultiplicator}
              fill={random(colors)}
              key={i}
            />
          );
        })}
        {/* {tessellation.cells.map((cell, i) => {
          return (
            <polygon
              key={i}
              points={cell.points}
              fill="none"
              stroke="#000"
            ></polygon>
          );
        })} */}
      </svg>
    </>
  );
};
