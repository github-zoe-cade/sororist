import { SVG } from "@svgdotjs/svg.js";
import {
  createVoronoiTessellation,
  random
} from "https://cdn.skypack.dev/@georgedoescode/generative-utils@1.0.34";
import { theme } from "styles/theme";
import { drawShape } from "./generateShape.js";

const colors = [theme.colors.alpha50, theme.colors.beta50, theme.colors.gamma50, theme.colors.delta50]
// const gradientColors = [theme.colors.alpha20, theme.colors.beta20, theme.colors.gamma20, theme.colors.delta20]
const shapes = ["circle", "grid", "polygon"]

if (typeof window === 'object') {
  const width = 200;
  const height = width * document.body.scrollHeight / document.body.clientWidth;
  const backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--background2');

  const svg = SVG()
    .viewbox(0, 0, width, height)
    .attr("preserveAspectRatio", "xMidYMid slice");

  const numPoints = 50;

  svg.rect(width, height).fill(backgroundColor);

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

  tessellation.cells.map((cell, i) => {
    const size = cell.innerCircleRadius;
    const shape = random(shapes)
    const colorIndex = Math.floor(random(0, colors.length))

    drawShape(svg, shape, size / 2, cell.centroid.x, cell.centroid.y, colors[colorIndex])
  })

  // {tessellation.cells.map((cell) =>
  //   svg.polygon(cell.points).fill("none").stroke({color: "#000", width: .1})
  // )}

  let blob = new Blob([svg.svg()], { type: "image/svg+xml" });
  let url = URL.createObjectURL(blob);
  let body = document.querySelector("body");
  body.style.backgroundImage = `url(${url})`;
  body.addEventListener("load", () => URL.revokeObjectURL(url), { once: true });
}
