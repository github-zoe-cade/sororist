import {
  createVoronoiTessellation,
  random,
} from "https://cdn.skypack.dev/@georgedoescode/generative-utils@1.0.37";
import { BackgroundShape } from "./BackgroundShape";
import { theme } from "styles/theme";

const colors = [
  theme.colors.alpha50,
  theme.colors.beta50,
  theme.colors.gamma50,
  theme.colors.delta50,
];
const shapes = ["circle", "grid", "polygon", "triangle"];
const numPoints = 50;

export const Background = ({ colorScheme }) => {
  const width = 200;
  const height =
    (width * document.body.scrollHeight) / document.body.clientWidth;

  const voronoiPoints = [];
  for (let i = 0; i < numPoints; i++) {
    const x = random(-10, width - 10);
    const y = random(0, height - 10);
    voronoiPoints.push({ x, y });
  }

  const tessellation = createVoronoiTessellation({
    width,
    height,
    points: [...voronoiPoints],
    relaxIterations: 100,
  });

  return (
    <>
      {tessellation.cells.map((cell, i) => {
        const size = cell.innerCircleRadius / 2;
        const shapeIndex = Math.floor(random(0, shapes.length));
        const colorIndex = Math.floor(random(0, colors.length));

        return (
          <BackgroundShape
            key={i}
            shape={shapes[shapeIndex]}
            size={size * Math.random()*3}
            x={cell.centroid.x}
            y={cell.centroid.y}
            fill={colors[colorIndex]}
            colorScheme={colorScheme}
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
    </>
  );
};
