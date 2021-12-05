import { random } from "https://cdn.skypack.dev/@georgedoescode/generative-utils@1.0.34";
import { spline } from "https://cdn.skypack.dev/@georgedoescode/spline";

const Spring = ({ x, y, fill, size, opacity }) => {
  const scale = random(0.009, 0.01) * size;
  return (
    <path
      d="M-11,14.4293571 C-10.2708372,15.1650514 -7.46332066,15.7712793 -4.83333333,17.5403098 C-2.52083333,19.0957861 -0.979166667,22.984477 -1.75,24.5399534 C-2.92066116,26.9022484 -7.12913924,26.9236988 -7.91666667,24.5399534 C-8.6875,22.2067388 -6.375,19.0957861 -4.83333333,17.5403098 C-3.29166667,15.9848335 -1.57518448,15.2070953 1.33333333,15.2070953 C4.24185115,15.2070953 7.20566517,17.0948527 7.5,17.5403098 C8.43390809,18.9537203 11.3541667,22.2067388 10.5833333,24.5399534 C9.8125,26.8731679 5.60538764,27.2385338 4.41666667,24.5399534 C3.2279457,21.8413729 6.52242456,19.0198081 7.5,17.5403098 C8.47757544,16.0608115 11.3541667,15.2070953 13.6666667,15.2070953 C15.9791667,15.2070953 18.6643256,16.0659607 19.8333333,17.5403098 C21.0023411,19.0146589 23.6875,22.2067388 22.9166667,24.5399534 C22.1458333,26.8731679 17.5208333,26.8731679 16.75,24.5399534 C15.9791667,22.2067388 17.5749002,19.9554209 19.0625,18.318048 C20.5500998,16.6806751 25.2291667,15.2070953 26,14.4293571"
      stroke={fill}
      fill="none"
      strokeWidth="3"
      // transform={`
      //   translate(${x} ${y})
      //   scale(${scale} ${scale})
      //   rotate(${random([-90.0, 0.0, 90.0])})
      // `}
      opacity={opacity}
    />
  );
};

const Triangle = ({ x, y, fill, size, opacity }) => {
  const scale = random(0.009, 0.01) * size;
  const points = [
    [
      [50, 0],
      [0, 100],
      [100, 100],
    ],
    [
      [0, 0],
      [100, 50],
      [0, 100],
    ],
    [
      [0, 50],
      [100, 0],
      [100, 100],
    ],
  ];
  const path = random(points).map(([coordX, coordY]) => ({
    x: coordX * scale + x - size / 2,
    y: coordY * scale + y - size / 2,
  }));

  return <path d={spline(path, 0.5, true)} fill={fill} opacity={opacity} />;
};

const Polygon = ({ x, y, fill, size, opacity }) => {
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
  const polygonSize = (random(0.3, 1) * size) / 10;
  const path = points
    .map(
      (coord) =>
        `${coord[0] * polygonSize + x - size / 2}, ${
          coord[1] * polygonSize + y - size / 2
        }`
    )
    .join(" ");

  return (
    <polygon
      points={path}
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.8 * polygonSize}
      fill={random(["none", fill])}
      opacity={opacity}
    />
  );
};

const Grid = ({ fill, size, x, y, opacity }) => {
  // const gridSize = size / 20;
  const gridSize = 0.3 + Math.random();
  const height = random(4, 7);
  const width = random(4, 7);

  return (
    <>
      {Array.from({ length: width }).map((_, indexX) =>
        Array.from({ length: height }).map((_, indexY) => (
          <circle
            key={`${indexX}-${indexY}`}
            r={gridSize}
            cx={x - size / 2 + indexX * gridSize * 3}
            cy={y - size / 2 + indexY * gridSize * 3}
            fill={fill}
            opacity={opacity}
          />
        ))
      )}
    </>
  );
};

export const BackgroundShape = ({
  shape,
  size,
  x,
  y,
  fill,
  colorScheme = "light",
}) => {
  if (shape === "rectangle") {
    return (
      <rect
        x={x - size / 2}
        y={y - size / 2}
        width={size}
        height={size}
        fill={fill}
        rx="2%"
        opacity={colorScheme === "dark" ? 0.8 : 1}
      />
    );
  }

  if (shape === "grid") {
    return (
      <Grid
        fill={fill}
        size={size}
        x={x - size / 4}
        y={y - size / 4}
        opacity={colorScheme === "dark" ? 0.8 : 1}
      />
    );
  }

  if (shape === "polygon") {
    return (
      <Polygon
        x={x}
        y={y}
        fill={fill}
        size={size}
        opacity={colorScheme === "dark" ? 0.8 : 1}
      />
    );
  }

  if (shape === "triangle") {
    return (
      <Triangle
        x={x}
        y={y}
        fill={fill}
        size={size}
        opacity={colorScheme === "dark" ? 0.8 : 1}
      />
    );
  }

  if (shape === "spring") {
    return (
      <Spring
        x={x}
        y={y}
        fill={fill}
        size={size}
        opacity={colorScheme === "dark" ? 0.8 : 1}
      />
    );
  }

  if (shape === "circle") {
    return (
      <circle
        r={size / 2}
        cx={x}
        cy={y}
        fill={fill}
        opacity={colorScheme === "dark" ? 0.8 : 1}
      />
    );
  }
};
