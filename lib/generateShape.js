import { random } from "https://cdn.skypack.dev/@georgedoescode/generative-utils@1.0.34";

const drawGrid = (svg, cellSize, color, basePositionX, basepositionY) => {
  const size = 0.3 + Math.random();
  const height = random(4, 7)
  const width = random(4, 7)

  Array.from({ length: width }).map((_, indexX) => {
    Array.from({ length: height }).map((_, indexY) => {
      svg
        .circle(size)
        .cx(basePositionX + indexX * size * 3)
        .cy(basepositionY + indexY * size * 3)
        .fill(color)
        .opacity(.8)
    });
  });
};

const drawPolygon = (svg, x, y, color, size) => {
  const points = [
    [5, 0],
    [6, 4],
    [10, 5],
    [6, 6],
    [5, 10],
    [4, 6],
    [0, 5],
    [4, 4],
  ];
  const polygonSize = random(0.3, 1) * size / 10;
  const path = points
    .map((coord) => `${coord[0] * polygonSize + x}, ${coord[1] * polygonSize + y}`)
    .join(" ");

  svg
    .polygon(path)
    .stroke({ color, linecap: "round", linejoin: "round", width: .8*polygonSize })
    .fill(random(["none", color])).opacity(.8);
};

const drawRectangle = (svg, size, color, x, y) => {
  const lengths = random([[random(2, 6), random(8, 15)], [random(8, 15), random(3, 6)]])
  svg.rect(lengths[0], lengths[1]).cx(x - size/2).cy(y - size/2).fill(color).radius(0.3).opacity(.8);
}

export const drawShape = (svg, shape, size, x, y, color) => {
  if (shape === "circle") {
    svg.circle(random(5, size * 2)).cx(x).cy(y).fill(color).opacity(.8);
  }
  if (shape === "grid") {
    drawGrid(svg, size, color, x - size/2, y - size/3);
  }
  if (shape === "rectangle") {
    drawRectangle(svg, size, color, x, y)
  }
  if (shape === "polygon") {
    drawPolygon(svg, x - size/2, y - size/2, color, size);
  }
};
